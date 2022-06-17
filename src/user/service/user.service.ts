import { Injectable } from '@nestjs/common';
import { User } from '../model/user.entity';
import { UserRepository } from '../repository/user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  getUsers(): User[] {
    return this.userRepository.getUsers();
  }

  findUserById(id: string): Promise<User> {
    return this.userRepository.findUserById(id);
  }

  deleteUserById(id: string): Promise<Boolean> {
    return this.userRepository.deleteUserById(id);
  }

  modifyUserById(user: User):  Promise<User> {
    return this.userRepository.modifyUserById(user);
  }

  registerUser(user: any):  Promise<User> {
    return this.userRepository.registerUser(user);
  }
}
