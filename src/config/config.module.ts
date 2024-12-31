import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { appConfig } from './app.config';

@Module({
  imports: [ConfigModule.forRoot({ load: [appConfig], isGlobal: true })],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class AppConfigModule {}
