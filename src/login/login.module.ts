import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from 'src/Client/model/client.entity';
import { ClientRepository } from 'src/Client/repository/client.repository';
import { User } from 'src/User/model/user.entity';
import { UserRepository } from 'src/User/repository/user.repository';
import { LoginController } from './controller/login.controller';
import { LoginService } from './service/login.service';

@Module({
  imports: [TypeOrmModule.forFeature([Client, User])],
  controllers: [LoginController],
  providers: [LoginService,ClientRepository, UserRepository],
})
export class LoginModule {}
