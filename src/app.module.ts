import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { GamesModule } from './modules/games/games.module';
import DBConfig from '../ormconfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(DBConfig),
    GamesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
