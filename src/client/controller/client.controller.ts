import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Put,
  Query,
  Res,
  Session,
} from '@nestjs/common';
import { Client } from '../model/client.entity';
import { ClientService } from '../service/client.service';

@Controller({
  path: 'clients',
})
export class ClientController {
  constructor(private clientService: ClientService) {}

  @Get('/get-all-client')
  getClient() {
    return this.clientService.getClients();
  }

  @Get('/get-client')
  findClientById(@Query('id') id: string) {
    return this.clientService
    .findClientById(id)
    .then((data) => data)
    .catch(() => {
      throw new HttpException('Client not found', HttpStatus.BAD_REQUEST);
    });
  }

  @Delete('/delete-client')
  async deleteClientById(@Query('id') id: string) {
    return this.clientService
      .deleteClientById(id)
      .then((data) => {
        return true;
      })
      .catch(() => {
        throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
      });
  }

  @Put('/update-client')
  public modifyClientById(@Body() client: Client) {
    return this.clientService
      .modifyClientById(client)
      .then((data) => {
        return data;
      })
      .catch(() => {
        throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
      });
  }

  @Post('/register-client')
  async registerClient(@Body() client: Client) {
    return this.clientService
      .registerClient(client)
      .then((data) => {
        return data;
      })
      .catch(() => {
        throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
      });
  }

  @Post('/login')
  async login(@Session() session : Record<string , any>) {
    console.log(session)
    console.log(session.id)
    session.authenticated = true
    return session
  }
}
