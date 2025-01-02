import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Sport } from '../../sports/entities/sport.entity';

// Enum for contest status (active, finished, etc.)
export enum ContestStatus {
  ACTIVE = 'Active',
  FINISHED = 'Finished',
  UPCOMING = 'Upcoming',
}

@Entity('contests')
export class Contest {
  @PrimaryGeneratedColumn('uuid')
  id: string;  // Unique ID of the contest

  @Column()
  name: string;  // Name of the contest

  @Column('text')
  description: string;  // Description of the contest

  @Column('enum', { enum: ContestStatus })
  status: ContestStatus;  // Status of the contest (active, finished, etc.)

  @Column('timestamp')
  start_date: Date;  // Start date and time of the contest

  @Column('timestamp')
  end_date: Date;  // End date and time of the contest

  @Column('int')
  prize_pool: number;  // Total prize pool of the contest

  @Column('jsonb')
  prize_distribution: object;  // Distribution of prizes among winners

  @Column('int')
  max_participants: number;  // Maximum number of participants allowed

  @Column('uuid')
  sport_id: string;  // ID of the sport related to the contest

  @ManyToOne(() => User, (user) => user.contests)
  @JoinColumn({ name: 'created_by' })
  created_by: User;  // User who created the contest

  @Column('uuid')
  created_by_id: string;  // ID of the user who created the contest

//   @ManyToOne(() => Sport, (sport) => sport.contests)
  @JoinColumn({ name: 'sport_id' })
  sport: Sport;  // The sport associated with the contest

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;  // Timestamp when the contest was created

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;  // Timestamp of the last update to the contest
}
