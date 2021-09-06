import { ConnectionOptions } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

const isProd = process.env.NODE_ENV === 'production';

const DBConfig: ConnectionOptions = {
  type: 'postgres',
  host: 'database',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'nest-gaming',
  entities: ['dist/src/entities/*.entity{.ts,.js}'],
  synchronize: false,
  migrationsRun: false,
  logging: !isProd,
  migrations: ['dist/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: './migrations',
  },
};

export default DBConfig;
