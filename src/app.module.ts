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
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('HOST'),
        port: config.get<number>('PORT'),
        username: config.get<string>('USER'),
        password: config.get<string>('PASSWORD'),
        database: config.get<string>('DATABASE'),
        logging: config.get<string>('LOG') === 'true',
        autoLoadEntities: true,
        synchronize: false,
      }),
      inject: [ConfigModule],
    }),
    UserModule,
    ProfileModule,
  ],
})
export class AppModule {}
