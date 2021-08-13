import { Controller, Get, Version } from "@nestjs/common";
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  @Version('1')
  getTest(): string {
    return 'This should works... maybe';
  }
}
