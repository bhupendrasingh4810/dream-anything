import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { CreateUserDto } from '../dto/register.dto';
import { LoginDto } from '../dto/login.dto';
import { ForgotPasswordDto } from '../dto/forgot-password.dto';
import { ResetPasswordDto } from '../dto/reset-password.dto';
import { RefreshTokenDto } from '../dto/refresh-token.dto';

/**
 * Controller handling authentication-related routes.
 * Exposes API endpoints for login, registration, password reset, etc.
 */
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    /**
     * Registers a new user.
     */
    @Post('register')
    async register(@Body() createUserDto: CreateUserDto) {
        // return this.authService.register(createUserDto);
    }

    /**
     * Logs in an existing user.
     */
    @Post('login')
    async login(@Body() loginDto: LoginDto) {
        // return this.authService.login(loginDto);
    }

    /**
     * Refreshes the access token using a valid refresh token.
     */
    @Post('refresh-token')
    async refreshToken(@Body() refreshTokenDto: RefreshTokenDto) {
        // return this.authService.refreshToken(refreshTokenDto);
    }
}
