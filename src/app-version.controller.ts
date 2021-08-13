import { Controller, Get } from '@nestjs/common';

@Controller({
  version: '1',
  path: 'versions',
})
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello world!';
  }
}
