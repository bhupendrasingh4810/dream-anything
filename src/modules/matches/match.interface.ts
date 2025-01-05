// src/matches/interfaces/match.interface.ts

import { UUID } from 'crypto'; // Assuming UUIDs are generated using crypto module

export interface Match {
    id: UUID;
    sportId: UUID;
    leagueName: string;
    teamAId: UUID;
    teamBId: UUID;
    startTime: Date;
    endTime: Date;
    venue: string;
    broadcastDetails: Record<string, any>;
    liveScoreUrl: string;
    teamAScore: number;
    teamBScore: number;
    umpireDetails: Record<string, any>;
    weatherForecast: Record<string, any>;
    ticketingUrl: string;
    teamALogo: string;
    teamBLogo: string;
    averageScoreStats: Record<string, any>;
    teamAWinProbability: number;
    teamBWinProbability: number;
    socialMediaTrends: Record<string, any>;
    matchOfficials: Record<string, any>;
    matchHighlights: Record<string, any>;
    createdAt: Date;
}
