import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('POSTGRES_HOST'),
        database: config.get<string>('POSTGRES_DB'),
        username: config.get<string>('POSTGRES_USER'),
        password: config.get<string>('POSTGRES_PASSWORD'),
        port: config.get<number>('POSTGRES_PORT'),
        logging: config.get<string>('POSTGRES_LOG') === 'true',
        entities: ['dist/**/*.entity.{ts,js}'],
        migrations: ['src/database/migrations/*{.ts,.js}'],
        cli: {
          migrationsDir: 'src/database/migrations',
        },
        autoLoadEntities: true,
        synchronize: false,
      }),
    }),
    ProfileModule,
    UserModule,
  ],
})
export class AppModule {}
