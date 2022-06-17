import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Client } from '../model/client.entity';

@Injectable()
export class ClientRepository {
  private clients: Client[] = new Array();

  constructor() {
    for (let i = 0; i < 1; i++) {
      this.clients.push(new Client());
    }
  }

  getUsers(): Client[] {
    return this.clients;
  }

  async findClientById(id: string): Promise<Client> {
    return new Promise<Client>((resolve, reject) => {
      let client = this.clients.find((client) => client.id === id);
      if (client === undefined) reject(null);
      else resolve(client);
    });
  }

  async deleteClientById(id: string): Promise<Boolean> {
    let client = await this.findClientById(id);
    return new Promise<Boolean>((resolve, reject) => {
      let index = this.clients.indexOf(client);
      if (index == -1) reject(false);
      this.clients.splice(index, 1);
      resolve(true);
    });
  }

  public modifyClientById(client: Client): Promise<Client> {
    return new Promise<Client>((resolve, reject) => {
      let index = this.clients.findIndex((x) => x.id === client.id);
      if (index == -1) reject(null);
      this.clients[index] = client;
      resolve(this.clients[index]);
    });
  }

  public registerClient(client: Client): Promise<Client> {
    return new Promise<Client>((resolve, reject) => {
      let newUser = Object.assign(new Client(), client);
      this.clients.push(newUser);
      resolve(newUser);
    });
  }
}
