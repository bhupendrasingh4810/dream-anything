import { Module } from '@nestjs/common';
import { SportsController } from './controllers/sports/sports.controller';
import { SportsService } from './services/sports/sports.service';

@Module({
  controllers: [SportsController],
  providers: [SportsService]
})
export class SportsModule {}
