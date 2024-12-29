import { Module } from '@nestjs/common';
import { LeaderboardsController } from './controllers/leaderboards/leaderboards.controller';
import { LeaderboardsService } from './services/leaderboards/leaderboards.service';

@Module({
  controllers: [LeaderboardsController],
  providers: [LeaderboardsService]
})
export class LeaderboardsModule {}
