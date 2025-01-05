import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

/**
 * LoggerMiddleware logs request and response details for debugging and monitoring.
 */
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction): void {
        const start = Date.now(); // Start time for measuring request duration
        const { method, originalUrl, ip } = req;

        // Log the incoming request
        console.log(`[Request] ${method} ${originalUrl} - IP: ${ip}`);

        // Listen for the response finish event
        res.on('finish', () => {
            const { statusCode } = res;
            const duration = Date.now() - start; // Calculate request duration

            // Log the completed response
            console.log(
                `[Response] ${method} ${originalUrl} - Status: ${statusCode} - Duration: ${duration}ms - IP: ${ip}`
            );
        });

        // Proceed to the next middleware or route handler
        next();
    }
}
