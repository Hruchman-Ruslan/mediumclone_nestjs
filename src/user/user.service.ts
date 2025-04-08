import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async createUser() {
    return 'User created successfully';
  }
}
