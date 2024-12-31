import { Injectable } from '@nestjs/common';

@Injectable()
export class MenuService {
  getMenuData(): string {
    return 'Menu service works!';
  }
}
