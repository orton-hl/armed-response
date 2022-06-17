import { Injectable } from '@nestjs/common';
import { User } from '../model/user.entity';

@Injectable()
export class UserRepository {
  private users: User[] = new Array();

  constructor() {
    for (let i = 0; i < 1; i++) {
      this.users.push(new User());
    }
  }

  getUsers(): User[] {
    return this.users;
  }

  async findUserById(id: string): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      let user = this.users.find((user) => user.id === id);
      if (user === undefined) reject(null);
      else resolve(user);
    });
  }

  async deleteUserById(id: string): Promise<Boolean> {
    let user = await this.findUserById(id);
    return new Promise<Boolean>((resolve, reject) => {
      let index = this.users.indexOf(user);
      if (index == -1) reject(false);
      this.users.splice(index, 1);
      resolve(true);
    });
  }

  public modifyUserById(user: User): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      let index = this.users.findIndex((x) => x.id === user.id);
      if (index == -1) reject(null);
      this.users[index] = user;
      resolve(this.users[index]);
    });
  }

  public registerUser(user: any): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      let newUser = Object.assign(new User(), user);
      this.users.push(newUser);
      resolve(newUser);
    });
  }
}
