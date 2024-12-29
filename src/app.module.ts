import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './core/auth/auth.module';
import { SecurityModule } from './core/security/security.module';
import { ValidationModule } from './core/validation/validation.module';
import { UtilsModule } from './core/utils/utils.module';
import { MiddlewareModule } from './core/middleware/middleware.module';
import { UsersModule } from './modules/users/users.module';
import { SportsModule } from './modules/sports/sports.module';
import { MatchesModule } from './modules/matches/matches.module';
import { ContestsModule } from './modules/contests/contests.module';
import { TransactionsModule } from './modules/transactions/transactions.module';
import { LeaderboardsModule } from './modules/leaderboards/leaderboards.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { PromotionsModule } from './modules/promotions/promotions.module';
import { SupportModule } from './modules/support/support.module';
import { ReportsModule } from './modules/reports/reports.module';
import { AnalyticsModule } from './modules/analytics/analytics.module';
import { DatabaseModule } from './infrastructure/database/database.module';
import { CacheModule } from './infrastructure/cache/cache.module';
import { JobsModule } from './infrastructure/jobs/jobs.module';

@Module({
  imports: [
    AuthModule,
    SecurityModule,
    ValidationModule,
    UtilsModule,
    MiddlewareModule,
    UsersModule,
    SportsModule,
    MatchesModule,
    ContestsModule,
    TransactionsModule,
    LeaderboardsModule,
    NotificationsModule,
    PromotionsModule,
    SupportModule,
    ReportsModule,
    AnalyticsModule,
    DatabaseModule,
    CacheModule,
    JobsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }