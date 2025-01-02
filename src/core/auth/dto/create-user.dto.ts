// src/modules/users/dto/create-user.dto.ts

import { IsString, IsEmail, IsOptional, IsDate, IsPhoneNumber, MinLength, IsEnum } from 'class-validator';

/**
 * DTO for creating a user.
 */
export class CreateUserDto {
    @IsEmail()
    email: string;

    @MinLength(6)
    @IsString()
    password: string;

    @IsOptional()
    @IsString()
    username: string;

    @IsOptional()
    @IsPhoneNumber()
    phone: string;

    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsDate()
    dob: Date;

    @IsOptional()
    @IsString()
    address: string;

    @IsOptional()
    @IsString()
    country: string;

    @IsOptional()
    @IsEnum(['Male', 'Female', 'Other'])
    gender: 'Male' | 'Female' | 'Other';

    @IsOptional()
    @IsString()
    language_preference: string;
}
