// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmModuleOptions: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  port: parseInt(<string>process.env.POSTGRES_PORT),
  logging: process.env.POSTGRES_LOG === 'true',
  entities: [`${__dirname}/../../src/**/entities/*.entity{.ts,.js}`],
  autoLoadEntities: true,
  synchronize: false,
};

export const ormConfig = {
  ...typeOrmModuleOptions,
  migrations: [`${__dirname}/../../src/database/migrations/*.entity{.ts,.js}`],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};

export default ormConfig;
