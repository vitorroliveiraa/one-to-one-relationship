import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { typeOrmModuleOptions } from './database/ormconfig';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({ ...typeOrmModuleOptions }),
    }),
    ProfileModule,
    UserModule,
  ],
})
export class AppModule {}
