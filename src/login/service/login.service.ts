import { Injectable } from '@nestjs/common';
import { resolve } from 'path';
import { Client } from 'src/client/model/client.entity';
import { ClientRepository } from 'src/client/repository/client.repository';
import { Credentials, LoginResponse } from 'src/shared/models';
import { User } from 'src/user/model/user.entity';
import { UserRepository } from 'src/user/repository/user.repository';

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

  async clientLogin(clientKey: string,  clientName : string) {
    let response: LoginResponse = {
      isUser: false,
      account: null,
      session: '',
    };
    return new Promise<LoginResponse>((resolve, reject) => {
      this.clientRepository
        .findClientByUsenameAndPassword(clientKey, clientName)
        .then((client) => {
          response.account = client;
          resolve(response);
        })
        .catch(() => reject(null));
    });
  }

  async handleLogin(credentials: Credentials): Promise<LoginResponse> {
    let  clientKey  : string = credentials.key
    let  clientName : string = credentials.name
    return new Promise<LoginResponse>(async (resolve, reject) => {
      this.userLogin(credentials)
        .then((data) => resolve(data))
        .catch(() => {
          this.clientLogin(clientKey,  clientName)
          .then(resolve)
          .catch(reject);
        });
    });
  }
}
