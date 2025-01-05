// src/matches/matches.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateMatchDto } from '../dto/create-match.dto';
import { UpdateMatchDto } from '../dto/update-match.dto';
import { MatchEntity } from '../entities/match.entity';

@Injectable()
export class MatchesService {
  constructor(
    @InjectRepository(MatchEntity)
    private readonly matchRepository: Repository<MatchEntity>,
  ) { }

  // Create a new match
  async create(createMatchDto: CreateMatchDto): Promise<MatchEntity> {
    const match = this.matchRepository.create(createMatchDto);
    return await this.matchRepository.save(match);
  }

  // Get all matches
  async findAll(): Promise<MatchEntity[]> {
    return this.matchRepository.find();
  }

  // Get match by ID
  async findOne(id: string): Promise<MatchEntity> {
    const options: FindOneOptions<MatchEntity> = { where: { id } }; // Correct usage of 'where' option
    const match = await this.matchRepository.findOne(options);
    if (!match) {
      throw new Error('Match not found');
    }
    return match;
  }

  // Update match by ID
  async update(id: string, updateMatchDto: UpdateMatchDto): Promise<MatchEntity> {
    const match = await this.findOne(id);
    await this.matchRepository.update(match.id, updateMatchDto);
    return this.findOne(id);
  }

  // Delete match by ID
  async remove(id: string): Promise<void> {
    const match = await this.findOne(id);
    await this.matchRepository.delete(match.id);
  }
}
