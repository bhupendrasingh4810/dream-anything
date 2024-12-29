import { IsNotEmpty } from 'class-validator';

/**
 * Data Transfer Object for refreshing the access token.
 * Used to handle the refresh token request.
 */
export class RefreshTokenDto {
    @IsNotEmpty()
    refreshToken: string; // Refresh token to get a new access token
}
