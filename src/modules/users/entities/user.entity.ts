import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';
import { IsEmail, IsNotEmpty, IsString, IsOptional } from 'class-validator';

/**
 * Represents the User entity in the database.
 * Maps to the "users" table.
 */
@Entity('users')
@Index('IDX_EMAIL', ['email']) // Index for email for faster lookup
@Index('IDX_PHONE', ['phone']) // Index for phone number for faster lookup
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string; // Unique identifier (Primary Key)

  @Column()
  @IsString()
  name: string; // User's full name

  @Column({ unique: true })
  @IsString()
  username: string; // Unique display name for the user

  @Column({ unique: true })
  @IsEmail()
  email: string; // Unique email address of the user

  @Column({ unique: true })
  @IsString()
  phone: string; // Unique phone number of the user

  @Column()
  password: string; // Encrypted password

  @Column({ nullable: true })
  @IsOptional()
  profile_picture_url: string; // URL for user's profile picture

  @Column()
  dob: Date; // User's date of birth

  @Column('jsonb')
  address: object; // User's full address (city, state, postal code)

  @Column()
  country: string; // User's country of residence

  @Column('enum', { enum: ['Male', 'Female', 'Other'] })
  gender: 'Male' | 'Female' | 'Other'; // User's gender

  @Column()
  language_preference: string; // User's preferred language for the app

  @Column('decimal', { precision: 10, scale: 2 })
  balance_cash: number; // Real money wallet balance

  @Column('decimal', { precision: 10, scale: 2 })
  balance_bonus: number; // Bonus wallet balance

  @Column('decimal', { precision: 10, scale: 2 })
  balance_withdrawable: number; // Amount eligible for withdrawal

  @Column({ default: false })
  is_vip: boolean; // Whether the user has a VIP subscription

  @Column({ nullable: true })
  vip_expiry_date: Date; // VIP subscription expiry date

  @Column()
  referral_code: string; // User's referral code

  @Column('uuid', { nullable: true })
  referred_by: string; // Referrer’s user ID

  @Column('enum', { enum: ['Pending', 'Verified', 'Rejected'], default: 'Pending' })
  kyc_status: 'Pending' | 'Verified' | 'Rejected'; // KYC status

  @Column('jsonb', { nullable: true })
  kyc_documents: object; // Uploaded KYC documents

  @Column('int')
  loyalty_points: number; // Points earned through loyalty programs

  @Column('decimal', { precision: 10, scale: 2 })
  total_earnings: number; // Lifetime earnings

  @Column('decimal', { precision: 10, scale: 2 })
  total_spent: number; // Total money spent on contests

  @Column('int')
  total_contests: number; // Number of contests joined

  @Column('int')
  total_wins: number; // Number of contests won

  @Column('jsonb', { nullable: true })
  favorite_sports: object; // List of favorite sports

  @Column('jsonb', { nullable: true })
  recent_activity: object; // Last 10 actions performed by the user

  @Column({ default: false })
  is_email_verified: boolean; // Whether the user's email is verified

  @Column({ default: false })
  is_phone_verified: boolean; // Whether the user's phone number is verified

  @Column('enum', { enum: ['Active', 'Suspended', 'Banned'], default: 'Active' })
  status: 'Active' | 'Suspended' | 'Banned'; // Account status

  @Column('timestamp', { nullable: true })
  last_login: Date; // Last login timestamp

  @Column('jsonb', { nullable: true })
  device_info: object; // Device information used for login (OS, model, version)

  @Column('int', { default: 0 })
  login_attempts: number; // Failed login attempts count

  @Column('timestamp', { nullable: true })
  account_locked_until: Date; // Time until the account is locked

  @Column()
  preferred_payment_method: string; // User's default payment method (e.g., UPI)

  @Column('jsonb', { nullable: true })
  privacy_settings: object; // Privacy settings (visibility, etc.)

  @Column('jsonb', { nullable: true })
  notification_preferences: object; // Notification preferences (email/SMS/push)

  @Column('int', { nullable: true })
  profile_completion_score: number; // Profile completion score (how complete is the profile)

  @Column('jsonb', { nullable: true })
  sports_preference_order: object; // Ordered list of sports preferred by the user

  @Column('jsonb', { nullable: true })
  badges_earned: object; // Achievements or badges unlocked

  @Column('jsonb', { nullable: true })
  connected_social_accounts: object; // Linked social accounts (FB, Google, etc.)

  @Column({ default: false })
  is_two_factor_enabled: boolean; // Whether two-factor authentication is enabled

  @Column('enum', { enum: ['SMS', 'Email', 'Authenticator App'], nullable: true })
  two_factor_method: 'SMS' | 'Email' | 'Authenticator App'; // Two-factor authentication method

  @Column('timestamp')
  created_at: Date; // Account creation timestamp

  @Column('timestamp', { nullable: true })
  updated_at: Date; // Last update timestamp
}
