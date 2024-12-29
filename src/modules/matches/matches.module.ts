import { Module } from '@nestjs/common';
import { MatchesController } from './controllers/matches/matches.controller';
import { MatchesService } from './services/matches/matches.service';

@Module({
  controllers: [MatchesController],
  providers: [MatchesService]
})
export class MatchesModule {}
