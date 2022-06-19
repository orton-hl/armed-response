import { Injectable } from '@nestjs/common';
import { Client } from '../model/client.entity';
import { ClientRepository } from '../repository/client.repository';

@Injectable()
export class ClientService {
  constructor(private clientRepository: ClientRepository) {}

  getClients(): Promise<Client[]> {
    return this.clientRepository.getClients();
  }

  findClientById(id: string): Promise<Client> {
    return this.clientRepository.findClientById(id);
  }

  deleteClientById(id: string): Promise<Boolean> {
    return this.clientRepository.deleteClientById(id);
  }

  modifyClientById(user: Client):  Promise<Client> {
    return this.clientRepository.modifyClientById(user);
  }

  registerClient(user: Client):  Promise<Client> {
    return this.clientRepository.registerClient(user);
  }
}
