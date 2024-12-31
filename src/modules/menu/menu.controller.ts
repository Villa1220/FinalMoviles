import { Controller, Get } from '@nestjs/common';

@Controller('menu')
export class MenuController {
  @Get()
  getMenu(): string {
    return 'Menu module works!';
  }
}
