import { User } from '@modules/users/entities/user.entity';
import { Injectable, NestMiddleware, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['authorization']?.split(' ')[1];
    const apiKey = req.headers['x-api-key'];

    if (!token) {
      throw new HttpException('Access token is missing', HttpStatus.UNAUTHORIZED);
    }

    if (apiKey !== process.env.API_KEY) {
      throw new HttpException('Invalid API key', HttpStatus.FORBIDDEN);
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET) as User;
      req.user = decoded; // Attach user info to request
      next();
    } catch (error) {
      throw new HttpException('Invalid or expired token', HttpStatus.UNAUTHORIZED);
    }
  }
}
