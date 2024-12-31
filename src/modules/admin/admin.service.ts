import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  getAdminData(): string {
    return 'Admin service works!';
  }
}
