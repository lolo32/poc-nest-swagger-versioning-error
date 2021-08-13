import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppController as AppControllerVersion } from './app-version.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, AppControllerVersion],
  providers: [AppService],
})
export class AppModule {}
