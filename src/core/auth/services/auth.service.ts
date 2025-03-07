import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { User } from '@modules/users/entities/user.entity';
import { CreateUserDto } from '../dto/register.dto';
import { LoginDto } from '../dto/login.dto';
import { ForgotPasswordDto } from '../dto/forgot-password.dto';
import { ResetPasswordDto } from '../dto/reset-password.dto';
import { RefreshTokenDto } from '../dto/refresh-token.dto';
import { ConfigService } from '@nestjs/config';
import { MailService } from '../mail.service';

/**
 * Service handling the core business logic for authentication and authorization.
 */
@Injectable()
export class AuthService {
    // constructor(
    @InjectRepository(User) private userRepository: Repository<User> // Inject the user repository
    //     private readonly configService: ConfigService,
    //     private readonly mailService: MailService
    // ) { }

    /**
     * Registers a new user.
     */
    // async register(createUserDto: CreateUserDto) {
    //     const { email, password, username, phone, name, dob, address, country, gender, language_preference } = createUserDto;
    //     const existingUser = await this.userRepository.findOne({ where: [{ email }, { phone }] });
    //     if (existingUser) {
    //         throw new Error('Email or phone already in use');
    //     }

    //     const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
    //     const user = this.userRepository.create({
    //         email,
    //         password: hashedPassword,
    //         username,
    //         phone,
    //         name,
    //         dob,
    //         address,
    //         country,
    //         gender,
    //         language_preference,
    //     });

    //     await this.userRepository.save(user); // Save the new user to the database
    //     return { message: 'User registered successfully' };
    // }

    /**
     * Logs in a user by validating their credentials.
     */
    async login(loginDto: LoginDto) {
        const { username, password } = loginDto;

        // Try to find the user by email or username
        const user: User = await this.userRepository.findOne({ where: [{ email: username }, { username }] });

        // If user doesn't exist, throw a 404 Not Found error
        if (!user) {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }

        // Compare password with the stored hash
        const isPasswordValid = await bcrypt.compare(password, user.password);

        // If the password is invalid, throw a 401 Unauthorized error
        if (!isPasswordValid) {
            throw new HttpException('Invalid password', HttpStatus.UNAUTHORIZED);
        }
        delete user.password;
        // Generate tokens
        const accessToken = this.generateAccessToken(user);
        const refreshToken = this.generateRefreshToken(user);

        return { accessToken, refreshToken, user };
    }

    /**
     * Refreshes the access token using the refresh token.
     */
    // async refreshToken(refreshTokenDto: RefreshTokenDto) {
    //     const { refreshToken } = refreshTokenDto;

    //     try {
    //         // Verify the refresh token
    //         const decoded: any = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

    //         // Ensure the token contains a `sub` (subject) field and it's a valid UUID or User identifier
    //         if (!decoded.sub) {
    //             throw new Error('Invalid token payload');
    //         }

    //         // Find the user based on the decoded token
    //         const user = await this.userRepository.findOne({ where: { id: decoded.sub } });

    //         if (!user) {
    //             throw new Error('User not found');
    //         }

    //         // Generate a new access token
    //         const newAccessToken = this.generateAccessToken(user);

    //         return { accessToken: newAccessToken };
    //     } catch (error) {
    //         // Specific error messages for debugging
    //         if (error instanceof jwt.JsonWebTokenError) {
    //             throw new Error('Invalid or expired refresh token');
    //         }
    //         throw error; // Re-throw other errors that aren't JWT-specific
    //     }
    // }

    // async forgotPassword(forgotPasswordDto: ForgotPasswordDto) {
    //     const { email } = forgotPasswordDto;

    //     const user = await this.userRepository.findOne({ where: { email } });
    //     if (!user) {
    //         throw new Error('User not found');
    //     }

    //     // Generate a reset token (with a short expiration time)
    //     const resetToken = jwt.sign({ sub: user.id }, this.configService.get('JWT_RESET_PASSWORD_SECRET'), {
    //         expiresIn: '15m', // Token expires in 15 minutes
    //     });

    //     // Send the reset token via email (or SMS if using phone)
    //     const resetUrl = `${this.configService.get('FRONTEND_URL')}/reset-password?token=${resetToken}`;
    //     await this.mailService.sendResetPasswordEmail(user.email, resetUrl);

    //     return { message: 'Password reset link sent to your email' };
    // }

    // async resetPassword(resetPasswordDto: ResetPasswordDto) {
    //     const { resetToken, password } = resetPasswordDto;

    //     try {
    //         // Verify the reset token
    //         const decoded: any = jwt.verify(resetToken, this.configService.get('JWT_RESET_PASSWORD_SECRET'));

    //         // Find the user based on the decoded token
    //         const user = await this.userRepository.findOne({ where: { id: decoded.sub } });
    //         if (!user) {
    //             throw new Error('User not found');
    //         }

    //         // Hash the new password before saving it
    //         const hashedPassword = await bcrypt.hash(password, 10);

    //         // Update the user's password
    //         user.password = hashedPassword;
    //         await this.userRepository.save(user);

    //         return { message: 'Password reset successfully' };
    //     } catch (error) {
    //         // Handle token expiration or invalid token error
    //         if (error instanceof jwt.TokenExpiredError) {
    //             throw new Error('Reset token expired');
    //         }
    //         if (error instanceof jwt.JsonWebTokenError) {
    //             throw new Error('Invalid reset token');
    //         }

    //         throw error;
    //     }
    // }

    /**
     * Generates a JWT access token for the user.
     */
    private generateAccessToken(user: User) {
        return jwt.sign({ sub: user.id, email: user.email }, '63156f09-6ef8-4e06-b15a-b44468b8a3cf', { expiresIn: '1h' });
        // return jwt.sign({ sub: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    }

    /**
     * Generates a JWT refresh token for the user.
     */
    private generateRefreshToken(user: User) {
        return jwt.sign({ sub: user.id }, '5bdcc192-2a46-40b5-8727-f09d3b68652f', { expiresIn: '7d' });
        // return jwt.sign({ sub: user.id }, process.env.JWT_REFRESH_SECRET, { expiresIn: '7d' });
    }
}
