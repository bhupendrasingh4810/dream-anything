import { IsEmail } from 'class-validator';

/**
 * Data Transfer Object for initiating password reset.
 * Used to handle the forgot password request.
 */
export class ForgotPasswordDto {
    @IsEmail()
    email: string; // User's email address
}
