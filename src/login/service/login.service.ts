import { Injectable } from '@nestjs/common';
import { resolve } from 'path';
import { Client } from 'src/Client/model/client.entity';
import { ClientRepository } from 'src/Client/repository/client.repository';
import { Credentials, LoginResponse } from 'src/shared/models';
import { User } from 'src/User/model/user.entity';
import { UserRepository } from 'src/User/repository/user.repository';

@Injectable()
export class LoginService {
  constructor(
    private clientRepository: ClientRepository,
    private userRepository: UserRepository,
  ) {}

  async userLogin(credentials: Credentials) {
    let response: LoginResponse = {
      isUser: true,
      account: null,
      session: '',
    };
    return new Promise<LoginResponse>((resolve, reject) => {
      this.userRepository
        .findUserByUsenameAndPassword(credentials)
        .then((user) => {
          response.account = user;
          resolve(response);
        })
        .catch(() => reject(null));
    });
  }

  async clientLogin(credentials: Credentials) {
    let response: LoginResponse = {
      isUser: false,
      account: null,
      session: '',
    };
    return new Promise<LoginResponse>((resolve, reject) => {
      this.clientRepository
        .findClientByUsenameAndPassword(credentials)
        .then((client) => {
          response.account = client;
          resolve(response);
        })
        .catch(() => reject(null));
    });
  }

  async handleLogin(credentials: Credentials): Promise<LoginResponse> {
    return new Promise<LoginResponse>(async (resolve, reject) => {
      this.userLogin(credentials)
        .then((data) => resolve(data))
        .catch(() => {
          this.clientLogin(credentials)
          .then(resolve)
          .catch(reject);
        });
    });
  }
}
