import { Injectable, Logger } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { AuthService } from '..//auth/services/auth.service'; // Assuming you have an AuthService
import { ConfigService } from '@nestjs/config';
// import { JwtPayload } from './interfaces/jwt-payload.interface'; // Define your payload interface

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    private readonly logger = new Logger(JwtStrategy.name);

    constructor(
        private authService: AuthService,
        private configService: ConfigService,
    ) {
        // Configure JWT validation options such as extraction method, secret, etc.
        super({
            jwtFromRequest: (req) => {
                // Extract the JWT token from the Authorization header
                const token = req?.headers?.authorization?.split(' ')[1];
                if (!token) {
                    throw new Error('Authorization token missing');
                }
                return token;
            },
            secretOrKey: configService.get<string>('JWT_SECRET'), // Secret used for validating the token
            ignoreExpiration: false, // Ensure token expiration is validated
            audience: configService.get<string>('JWT_AUDIENCE'), // Optional: Validate audience
            issuer: configService.get<string>('JWT_ISSUER'), // Optional: Validate issuer
        });
    }

    // Validate the JWT payload and fetch user from database or another service
    //   async validate(payload: JwtPayload) {
    //     try {
    //       // Use the authService to fetch the user by ID (sub)
    //       const user = await this.authService.validateUser(payload.sub);
    //       if (!user) {
    //         this.logger.error('User not found for JWT payload', { userId: payload.sub });
    //         throw new Error('User not found');
    //       }
    //       return user; // Return user object which will be available in request.user
    //     } catch (error) {
    //       this.logger.error('Error validating JWT', { error: error.message });
    //       throw error; // Propagate error if any
    //     }
    //   }
}
