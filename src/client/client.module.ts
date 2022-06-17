import { Module } from '@nestjs/common';
import { ClientController } from './controller/client.controller';
import { ClientRepository } from './repository/client.repository';
import { ClientService } from './service/client.service';

@Module({
    imports: [],
    controllers: [ClientController],
    providers: [ClientRepository, ClientService],
})
export class ClientModule {}
