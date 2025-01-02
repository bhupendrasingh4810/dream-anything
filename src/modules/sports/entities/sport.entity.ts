import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

@Entity('sports')
export class Sport {
  @PrimaryGeneratedColumn('uuid')
  id: string;  // Unique ID of the sport

  @Column()
  name: string;  // Name of the sport

  @Column('jsonb')
  formats: object;  // Available formats for the sport (e.g., team, individual)

  @Column()
  icon_url: string;  // URL of the sport's icon or logo

  @Column('jsonb')
  scoring_rules: object;  // Scoring rules for the sport

  @Column('int')
  popularity_index: number;  // Popularity index of the sport

  @Column('jsonb', { nullable: true })
  metadata: object;  // Additional metadata related to the sport (e.g., history, origin)

  @Column({ default: true })
  is_active: boolean;  // Whether the sport is currently active or not

  @Column('int')
  global_rank: number;  // Global rank of the sport (based on popularity or other factors)

  @Column('jsonb')
  regional_leagues: object;  // Information about regional leagues related to the sport

  @Column('jsonb')
  equipment_used: object;  // List of equipment used in the sport

  @Column('int')
  min_team_size: number;  // Minimum team size required for the sport

  @Column('int')
  max_team_size: number;  // Maximum team size allowed for the sport

  @Column({ default: false })
  is_individual_sport: boolean;  // Whether the sport is individual or team-based

  @Column('jsonb')
  common_positions: object;  // Common positions in the sport (e.g., forward, goalkeeper)

  @Column()
  origin_country: string;  // The country where the sport originated

  @Column('jsonb')
  hall_of_fame_players: object;  // List of hall of fame players in the sport

  @Column('jsonb', { nullable: true })
  special_rules: object;  // Special rules or exceptions for the sport

  @Column({ default: false })
  live_event_integration: boolean;  // Whether live events for the sport are integrated

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;  // Timestamp when the sport was created in the system
}
