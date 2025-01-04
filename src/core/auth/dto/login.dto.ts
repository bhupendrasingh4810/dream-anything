import { IsEmail, IsNotEmpty } from 'class-validator';

/**
 * Data Transfer Object for logging in a user.
 * Used to handle the incoming login request.
 */
export class LoginDto {
    @IsEmail()
    username: string; // User's email address or username

    @IsNotEmpty()
    password: string; // User's password
}
