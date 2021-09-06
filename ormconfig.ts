import { ConnectionOptions } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

const isProd = process.env.NODE_ENV === 'production';

const DBConfig: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
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
