// src/matches/entities/match.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { MatchStatus } from '../match.enum';

@Entity('matches')
export class MatchEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('uuid')
    sportId: string;

    @Column()
    leagueName: string;

    @Column('uuid')
    teamAId: string;

    @Column('uuid')
    teamBId: string;

    @Column('timestamp')
    startTime: Date;

    @Column('timestamp')
    endTime: Date;

    @Column()
    venue: string;

    @Column('jsonb')
    broadcastDetails: Record<string, any>;

    @Column()
    liveScoreUrl: string;

    @Column('int')
    teamAScore: number;

    @Column('int')
    teamBScore: number;

    @Column('jsonb')
    umpireDetails: Record<string, any>;

    @Column('jsonb')
    weatherForecast: Record<string, any>;

    @Column()
    ticketingUrl: string;

    @Column()
    teamALogo: string;

    @Column()
    teamBLogo: string;

    @Column('jsonb')
    averageScoreStats: Record<string, any>;

    @Column('decimal')
    teamAWinProbability: number;

    @Column('decimal')
    teamBWinProbability: number;

    @Column('jsonb')
    socialMediaTrends: Record<string, any>;

    @Column('jsonb')
    matchOfficials: Record<string, any>;

    @Column('jsonb')
    matchHighlights: Record<string, any>;

    @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}
