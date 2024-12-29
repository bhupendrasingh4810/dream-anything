import { IsEmail, IsNotEmpty, MinLength, IsOptional, IsString } from 'class-validator';

/**
 * Data Transfer Object for registering a new user.
 * Used to handle the incoming registration request.
 */
export class RegisterDto {
    @IsNotEmpty()
    @IsString()
    name: string; // User's full name

    @IsNotEmpty()
    @IsString()
    username: string; // Unique username

    @IsEmail()
    email: string; // User's email address

    @IsNotEmpty()
    password: string; // User's password

    @IsOptional()
    phone: string; // Optional phone number

    @IsOptional()
    profile_picture_url: string; // Optional profile picture URL

    dob: Date; // User's date of birth

    @IsOptional()
    address: object; // Optional address

    country: string; // User's country

    gender: 'Male' | 'Female' | 'Other'; // User's gender

    language_preference: string; // Preferred language for the app
}
