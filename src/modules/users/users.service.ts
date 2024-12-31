import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUsersData(): string {
    return 'Users service works!';
  }
}
