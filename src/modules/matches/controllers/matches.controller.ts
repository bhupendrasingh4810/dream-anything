// src/matches/matches.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { MatchesService } from '../services/matches.service';
import { CreateMatchDto } from '../dto/create-match.dto';
import { UpdateMatchDto } from '../dto/update-match.dto';
import { MatchEntity } from '../entities/match.entity';

@Controller('matches')
export class MatchesController {
    constructor(private readonly matchesService: MatchesService) { }

    @Post()
    async create(@Body() createMatchDto: CreateMatchDto): Promise<MatchEntity> {
        return this.matchesService.create(createMatchDto);
    }

    @Get()
    async findAll(): Promise<MatchEntity[]> {
        return this.matchesService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<MatchEntity> {
        return this.matchesService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateMatchDto: UpdateMatchDto): Promise<MatchEntity> {
        return this.matchesService.update(id, updateMatchDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
        return this.matchesService.remove(id);
    }
}
