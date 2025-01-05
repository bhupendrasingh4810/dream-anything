// src/matches/dto/create-match.dto.ts

import { IsUUID, IsString, IsDateString, IsOptional, IsNumber, IsObject, IsDecimal } from 'class-validator';

export class CreateMatchDto {
    @IsUUID()
    sportId: string;

    @IsString()
    leagueName: string;

    @IsUUID()
    teamAId: string;

    @IsUUID()
    teamBId: string;

    @IsDateString()
    startTime: string;

    @IsDateString()
    endTime: string;

    @IsString()
    venue: string;

    @IsObject()
    @IsOptional()
    broadcastDetails?: Record<string, any>;

    @IsString()
    liveScoreUrl: string;

    @IsNumber()
    teamAScore: number;

    @IsNumber()
    teamBScore: number;

    @IsObject()
    @IsOptional()
    umpireDetails?: Record<string, any>;

    @IsObject()
    @IsOptional()
    weatherForecast?: Record<string, any>;

    @IsString()
    ticketingUrl: string;

    @IsString()
    teamALogo: string;

    @IsString()
    teamBLogo: string;

    @IsObject()
    @IsOptional()
    averageScoreStats?: Record<string, any>;

    @IsDecimal()
    teamAWinProbability: number;

    @IsDecimal()
    teamBWinProbability: number;

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
