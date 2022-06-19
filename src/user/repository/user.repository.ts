import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { Credentials } from 'src/shared/models';
import { Repository } from 'typeorm';
import { User } from '../model/user.entity';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User) private repositoryUser: Repository<User>,
  ) {}

  getUsers(): Promise<User[]> {
    return this.repositoryUser.find();
  }

  async findUserById(id: string): Promise<User> {
    return new Promise<User>(async (resolve, reject) => {
      let user = await this.repositoryUser.findOneBy({id:id})
      if(user === null) reject()
      else resolve(user);
    });
  }

  async deleteUserById(id: string): Promise<Boolean> {
    return new Promise<Boolean>((resolve, reject) => {
      this.repositoryUser.delete({id:id})
      .then(() => resolve(true))
      .catch(() => reject())
    });
  }

  public modifyUserById(user: User): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      this.findUserById(user.id)
        .then(() => {
          return this.repositoryUser.save(user);
        })
        .then((newUser) => resolve(newUser))
        .catch(() => reject());
    });
  }

  public registerUser(user: any): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      this.repositoryUser
        .save(user)
        .then((newUser) => resolve(newUser))
        .catch(() => reject());
    });
  }


  public async findUserByUsenameAndPassword(credentials: Credentials): Promise<User> {
    return new Promise<User>(async (resolve, reject) => {
      let user = await this.repositoryUser.findOneBy({username : credentials.username, password:credentials.password})
      if(user === null) reject(null)
      else resolve(user);
    });
  }

  public loginUser(user: any): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      this.repositoryUser
        .save(user)
        .then((newUser) => resolve(newUser))
        .catch(() => reject(null));
    });
  }
}
