import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from '../model/client.entity';

@Injectable()
export class ClientRepository {

  constructor(@InjectRepository(Client) private repository: Repository<Client>) {
  }

  getClients(): Promise<Client[]> {
    return this.repository.find().then()
  }

  async findClientById(id: string): Promise<Client> {
    return new Promise<Client>(async (resolve, reject) => {
      let client = await this.repository.findOneBy({id:id})
      if(client === null) reject()
      else resolve(client);
    });
  }

  async deleteClientById(id: string): Promise<Boolean> {
    return new Promise<Boolean>((resolve, reject) => {
      this.repository.delete({id:id})
      .then(() => resolve(true))
      .catch(() => reject())
    });
  }

  public modifyClientById(client: Client): Promise<Client> {
    return new Promise<Client>((resolve, reject) => {
      this.findClientById(client.id)
      .then(() => {
        return this.repository.save(client);
      })
      .then((newUser) => resolve(newUser))
      .catch(() => reject());
    });
  }

  public registerClient(client: Client): Promise<Client> {
    return new Promise<Client>((resolve, reject) => {
      this.repository
        .save(client)
        .then((newClient) => resolve(newClient))
        .catch(() => reject());
    });
  }
}
