import { IsString, IsEmail, IsEnum, IsOptional, IsBoolean, IsNumber, IsDateString, IsObject, IsUUID, IsInt, Length, Min, Max } from 'class-validator';
import { Gender, KycStatus, UserStatus } from '../../../modules/users/entities/user.entity';

export class CreateUserDto {
  @IsString()
  @Length(1, 100)
  name: string;

  @IsString()
  @Length(1, 50)
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  @Length(10, 15)
  phone: string;

  @IsString()
  @Length(8, 50)
  password: string;

  @IsOptional()
  @IsString()
  profile_picture_url?: string;

  @IsDateString()
  dob: Date;

  @IsObject()
  address: object;

  @IsString()
  country: string;

  @IsEnum(Gender)
  gender: Gender;

  @IsString()
  language_preference: string;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  balance_cash?: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  balance_bonus?: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  balance_withdrawable?: number;

  @IsOptional()
  @IsBoolean()
  is_vip?: boolean;

  @IsOptional()
  @IsDateString()
  vip_expiry_date?: string;

  @IsOptional()
  @IsString()
  referral_code?: string;

  @IsOptional()
  @IsUUID()
  referred_by?: string;

  @IsEnum(KycStatus)
  kyc_status: KycStatus;

  @IsOptional()
  @IsObject()
  kyc_documents?: object;

  @IsOptional()
  @IsInt()
  @Min(0)
  loyalty_points?: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  total_earnings?: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  total_spent?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  total_contests?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  total_wins?: number;

  @IsOptional()
  @IsObject()
  favorite_sports?: object;

  @IsOptional()
  @IsObject()
  recent_activity?: object;

  @IsOptional()
  @IsBoolean()
  is_email_verified?: boolean;

  @IsOptional()
  @IsBoolean()
  is_phone_verified?: boolean;

  @IsEnum(UserStatus)
  status: UserStatus;

  @IsOptional()
  @IsObject()
  device_info?: object;

  @IsOptional()
  @IsInt()
  @Min(0)
  login_attempts?: number;

  @IsOptional()
  @IsDateString()
  account_locked_until?: Date;

  @IsString()
  preferred_payment_method: string;

  @IsOptional()
  @IsObject()
  privacy_settings?: object;

  @IsOptional()
  @IsObject()
  notification_preferences?: object;

  @IsOptional()
  @IsInt()
  @Min(0)
  profile_completion_score?: number;

  @IsOptional()
  @IsObject()
  sports_preference_order?: object;

  @IsOptional()
  @IsObject()
  badges_earned?: object;

  @IsOptional()
  @IsObject()
  connected_social_accounts?: object;

  @IsOptional()
  @IsBoolean()
  is_two_factor_enabled?: boolean;

  @IsOptional()
  @IsEnum(['SMS', 'Email', 'Authenticator App'])
  two_factor_method?: string;
}
