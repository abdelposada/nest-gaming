import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { GamesService } from './games.service';
import { Game } from 'src/interfaces/game.interface';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Controller('games')
export class GamesController {
  constructor(private gamesService: GamesService) {}

  @Get()
  async findAll(): Promise<Game[]> {
    return await this.gamesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.gamesService.findOne(id);
  }

  @Post()
  async create(@Body() createGameDto: CreateGameDto) {
    this.gamesService.create(createGameDto);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    updateGameDto: UpdateGameDto
  ) {
    return this.gamesService.update(id, updateGameDto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.gamesService.delete(id);
  }
}
