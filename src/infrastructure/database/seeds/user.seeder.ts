import { DataSource } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { faker } from '@faker-js/faker';
import { User } from '../../../modules/users/entities/user.entity';
import { Gender, KycStatus, UserStatus } from '../../../modules/users/entities/user.entity';

export class UsersSeeder {
  static async seed(dataSource: DataSource): Promise<void> {
    const userRepository = dataSource.getRepository(User);

    // Create a batch of users
    const users: User[] = [];
    const availableLocales = ['en', 'es', 'fr', 'de', 'it', 'ja', 'zh_CN'];

    for (let i = 0; i < 50; i++) {
      const user = new User();
      user.name = faker.person.fullName();
      user.username = faker.internet.username();
      user.email = faker.internet.email();
      user.phone = faker.phone.number();
      user.password = await bcrypt.hash('Dream1234', 10); // Use hashed passwords in production
      user.profile_picture_url = faker.image.avatar();
      user.dob = faker.date.birthdate({ min: 18, max: 65, mode: 'age' });
      user.address = {
        street: faker.location.streetAddress(),
        city: faker.location.city(),
        country: faker.location.country(),
      };
      user.country = faker.address.country();
      user.gender = faker.helpers.arrayElement([Gender.MALE, Gender.FEMALE, Gender.OTHER]);
      user.language_preference = faker.helpers.arrayElement(availableLocales); // Selects a valid locale
      user.balance_cash = faker.number.float({ min: 0, max: 1000, fractionDigits: 2 });
      user.balance_bonus = faker.number.float({ min: 0, max: 500, fractionDigits: 2 });
      user.balance_withdrawable = faker.number.float({ min: 0, max: 500, fractionDigits: 2 });
      user.is_vip = faker.datatype.boolean();
      user.vip_expiry_date = user.is_vip ? faker.date.future().toISOString() : null;
      user.referral_code = faker.string.alphanumeric(8);
      user.referred_by = null; // Set to a valid user UUID if needed
      user.kyc_status = faker.helpers.arrayElement([KycStatus.PENDING, KycStatus.VERIFIED, KycStatus.REJECTED]);
      user.kyc_documents = null; // Add KYC document mock data if needed
      user.loyalty_points = faker.number.int({ min: 0, max: 1000 });
      user.total_earnings = faker.number.float({ min: 0, max: 10000, fractionDigits: 2 });
      user.total_spent = faker.number.float({ min: 0, max: 5000, fractionDigits: 2 });
      user.total_contests = faker.number.int({ min: 0, max: 100 });
      user.total_wins = faker.number.int({ min: 0, max: 50 });
      user.favorite_sports = faker.helpers.arrayElements(['Football', 'Basketball', 'Tennis', 'Cricket'], 2); // Mock favorite sports
      user.recent_activity = null; // Add mock activities if needed
      user.is_email_verified = faker.datatype.boolean();
      user.is_phone_verified = faker.datatype.boolean();
      user.status = faker.helpers.arrayElement([UserStatus.ACTIVE, UserStatus.SUSPENDED, UserStatus.BANNED]);
      user.last_login = faker.date.recent();
      user.device_info = { os: faker.helpers.arrayElement(['iOS', 'Android', 'Windows']), version: faker.system.semver() };
      user.login_attempts = faker.number.int({ min: 0, max: 5 });
      user.account_locked_until = null; // Mock account lock timestamp if needed
      user.preferred_payment_method = faker.finance.transactionType();
      user.privacy_settings = { visibility: faker.helpers.arrayElement(['Public', 'Private', 'Friends Only']) };
      user.notification_preferences = { email: faker.datatype.boolean(), sms: faker.datatype.boolean() };
      user.profile_completion_score = faker.number.int({ min: 0, max: 100 });
      user.sports_preference_order = ['Football', 'Basketball']; // Mock sports order
      user.badges_earned = null; // Mock badges if needed
      user.connected_social_accounts = null; // Mock social accounts if needed
      user.is_two_factor_enabled = faker.datatype.boolean();
      user.two_factor_method = user.is_two_factor_enabled ? 'SMS' : null;
      user.created_at = new Date();
      user.updated_at = new Date();
      users.push(user);
    }

    await userRepository.save(users);
  }
}
