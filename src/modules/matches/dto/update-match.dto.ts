// src/matches/dto/update-match.dto.ts

import { IsUUID, IsString, IsDateString, IsOptional, IsNumber, IsObject, IsDecimal } from 'class-validator';

export class UpdateMatchDto {
    @IsUUID()
    @IsOptional()
    sportId?: string;

    @IsString()
    @IsOptional()
    leagueName?: string;

    @IsUUID()
    @IsOptional()
    teamAId?: string;

    @IsUUID()
    @IsOptional()
    teamBId?: string;

    @IsDateString()
    @IsOptional()
    startTime?: string;

    @IsDateString()
    @IsOptional()
    endTime?: string;

    @IsString()
    @IsOptional()
    venue?: string;

    @IsObject()
    @IsOptional()
    broadcastDetails?: Record<string, any>;

    @IsString()
    @IsOptional()
    liveScoreUrl?: string;

    @IsNumber()
    @IsOptional()
    teamAScore?: number;

    @IsNumber()
    @IsOptional()
    teamBScore?: number;

    @IsObject()
    @IsOptional()
    umpireDetails?: Record<string, any>;

    @IsObject()
    @IsOptional()
    weatherForecast?: Record<string, any>;

    @IsString()
    @IsOptional()
    ticketingUrl?: string;

    @IsString()
    @IsOptional()
    teamALogo?: string;

    @IsString()
    @IsOptional()
    teamBLogo?: string;

    @IsObject()
    @IsOptional()
    averageScoreStats?: Record<string, any>;

    @IsDecimal()
    @IsOptional()
    teamAWinProbability?: number;

    @IsDecimal()
    @IsOptional()
    teamBWinProbability?: number;

    @IsObject()
    @IsOptional()
    socialMediaTrends?: Record<string, any>;

    @IsObject()
    @IsOptional()
    matchOfficials?: Record<string, any>;

    @IsObject()
    @IsOptional()
    matchHighlights?: Record<string, any>;
}
