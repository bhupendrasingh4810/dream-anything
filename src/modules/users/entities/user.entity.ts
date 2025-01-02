import { Entity, PrimaryGeneratedColumn, Column, Index, OneToMany } from 'typeorm';
import { Contest } from '../../contests/entities/contest.entity';
// import { UserTeam } from './user-teams.entity';
import { Transaction } from '../../transactions/entities/transaction.entity';
import { UserNotification } from '../../notifications/entities/notification.entity';
import { SupportTicket } from '../../support/entities/support-ticket.entity';

// Enum for Gender field
export enum Gender {
  MALE = 'Male',
  FEMALE = 'Female',
  OTHER = 'Other',
}

// Enum for KYC status
export enum KycStatus {
  PENDING = 'Pending',
  VERIFIED = 'Verified',
  REJECTED = 'Rejected',
}

// Enum for User status (active, suspended, banned)
export enum UserStatus {
  ACTIVE = 'Active',
  SUSPENDED = 'Suspended',
  BANNED = 'Banned',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;  // Unique ID of the user

  @Column()
  name: string;  // Full name of the user

  @Column({ unique: true })
  username: string;  // Unique username for the user

  @Column({ unique: true })
  @Index()
  email: string;  // Unique email address of the user

  @Column({ unique: true })
  @Index()
  phone: string;  // Unique phone number of the user

  @Column()
  password: string;  // Password for user authentication

  @Column({ nullable: true })
  profile_picture_url: string;  // URL of the user's profile picture

  @Column('date')
  dob: Date;  // Date of birth of the user

  @Column('jsonb')
  address: object;  // Address of the user in JSON format

  @Column()
  country: string;  // Country of the user

  @Column('enum', { enum: Gender })
  gender: Gender;  // Gender of the user

  @Column()
  language_preference: string;  // Preferred language of the user

  @Column('decimal', { precision: 10, scale: 2 })
  balance_cash: number;  // Cash balance of the user

  @Column('decimal', { precision: 10, scale: 2 })
  balance_bonus: number;  // Bonus balance of the user

  @Column('decimal', { precision: 10, scale: 2 })
  balance_withdrawable: number;  // Withdrawable balance of the user

  @Column()
  is_vip: boolean;  // Whether the user is a VIP member

  @Column('date', { nullable: true })
  vip_expiry_date: string;  // Expiry date of the user's VIP status

  @Column({ nullable: true })
  referral_code: string;  // Referral code of the user

  @Column('uuid', { nullable: true })
  referred_by: string;  // ID of the person who referred the user

  @Column('enum', { enum: KycStatus })
  kyc_status: KycStatus;  // KYC verification status of the user

  @Column('jsonb', { nullable: true })
  kyc_documents: object;  // KYC documents submitted by the user

  @Column('int', { default: 0 })
  loyalty_points: number;  // Loyalty points accumulated by the user

  @Column('decimal', { precision: 15, scale: 2, default: 0 })
  total_earnings: number;  // Total earnings of the user

  @Column('decimal', { precision: 15, scale: 2, default: 0 })
  total_spent: number;  // Total amount spent by the user

  @Column('int', { default: 0 })
  total_contests: number;  // Total number of contests participated by the user

  @Column('int', { default: 0 })
  total_wins: number;  // Total number of contests won by the user

  @Column('jsonb', { nullable: true })
  favorite_sports: object;  // List of the user's favorite sports in JSON format

  @Column('jsonb', { nullable: true })
  recent_activity: object;  // User's recent activities in JSON format

  @Column({ default: false })
  is_email_verified: boolean;  // Whether the user's email is verified

  @Column({ default: false })
  is_phone_verified: boolean;  // Whether the user's phone number is verified

  @Column('enum', { enum: UserStatus })
  status: UserStatus;  // Status of the user's account (active, suspended, banned)

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  last_login: Date;  // Timestamp of the user's last login

  @Column('jsonb', { nullable: true })
  device_info: object;  // Information about the devices used by the user

  @Column('int', { default: 0 })
  login_attempts: number;  // Number of login attempts made by the user

  @Column('timestamp', { nullable: true })
  account_locked_until: Date;  // Timestamp indicating when the account will be unlocked

  @Column()
  preferred_payment_method: string;  // Preferred payment method of the user

  @Column('jsonb', { nullable: true })
  privacy_settings: object;  // Privacy settings of the user

  @Column('jsonb', { nullable: true })
  notification_preferences: object;  // Notification preferences of the user

  @Column('int', { default: 0 })
  profile_completion_score: number;  // Score indicating how complete the user's profile is

  @Column('jsonb', { nullable: true })
  sports_preference_order: object;  // Order of sports preferences set by the user

  @Column('jsonb', { nullable: true })
  badges_earned: object;  // Badges earned by the user

  @Column('jsonb', { nullable: true })
  connected_social_accounts: object;  // Information about social accounts linked to the user

  @Column({ default: false })
  is_two_factor_enabled: boolean;  // Whether the user has enabled two-factor authentication

  @Column('enum', { enum: ['SMS', 'Email', 'Authenticator App'], nullable: true })
  two_factor_method: string;  // Method used for two-factor authentication

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;  // Timestamp of when the user account was created

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;  // Timestamp of the last time the user account was updated

  // Relationships
  @OneToMany(() => Contest, (contest) => contest.created_by)
  contests: Contest[];

//   @OneToMany(() => UserTeam, (team) => team.user)
//   teams: UserTeam[];

  @OneToMany(() => Transaction, (transaction) => transaction.user)
  transactions: Transaction[];

  @OneToMany(() => UserNotification, (notification) => notification.user)
  notifications: UserNotification[];

  @OneToMany(() => SupportTicket, (ticket) => ticket.user)
  supportTickets: SupportTicket[];
}
