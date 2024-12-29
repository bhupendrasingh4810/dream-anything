import { Module } from '@nestjs/common';
import { ContestsController } from './controllers/contests/contests.controller';
import { ContestsService } from './services/contests/contests.service';

@Module({
  controllers: [ContestsController],
  providers: [ContestsService]
})
export class ContestsModule {}
