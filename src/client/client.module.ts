import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientController } from './controller/client.controller';
import { Client } from './model/client.entity';
import { ClientRepository } from './repository/client.repository';
import { ClientService } from './service/client.service';

@Module({
    imports: [TypeOrmModule.forFeature([Client])],
    controllers: [ClientController],
    providers: [ClientRepository, ClientService],
    exports : [ClientRepository]
})
export class ClientModule {}
