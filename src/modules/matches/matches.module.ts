// src/matches/matches.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MatchesService } from './services/matches.service';
import { MatchesController } from './controllers/matches.controller';
import { MatchEntity } from './entities/match.entity';
import { MatchStatus } from './match.enum';  // Import the enum for better readability in the service/controller.

@Module({
  imports: [
    TypeOrmModule.forFeature([MatchEntity]), // Register MatchEntity with TypeORM
  ],
  providers: [MatchesService],  // Register MatchesService
  controllers: [MatchesController],  // Register MatchesController
})
export class MatchesModule { }
