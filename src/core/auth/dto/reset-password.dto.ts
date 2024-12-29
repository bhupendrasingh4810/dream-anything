import { IsNotEmpty, MinLength } from 'class-validator';

/**
 * Data Transfer Object for resetting the password.
 * Used to handle the reset password request.
 */
export class ResetPasswordDto {
    @IsNotEmpty()
    resetToken: string; // Token used to validate the password reset

    @MinLength(6)
    password: string; // New password (minimum length of 6 characters)
}
