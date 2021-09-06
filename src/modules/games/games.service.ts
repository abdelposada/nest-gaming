import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Game } from 'src/interfaces/game.interface';
import { GameEntity } from '../../entities/game.entity';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(GameEntity)
    private readonly gameRepo: Repository<GameEntity>
  ) {}

  findAll(): Promise<Game[]> {
    return this.gameRepo.find();
  }

  findOne(id: number) {
    return this.gameRepo.findOne(id);
  }

  create(game: Game) {
    return this.gameRepo.save(game);
  }

  update(id: number, payload: Game) {
    return this.gameRepo.update(id, payload);
  }

  delete(id: number) {
    return this.gameRepo.delete(id);
  }
}
