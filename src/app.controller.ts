import { Controller, Get, Version } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Version('1')
  getHello(): string {
    return 'Hello world from v1!';
  }

  @Get()
  @Version('2')
  getTest(): string {
    return 'Hello world from v2!';
  }
}
