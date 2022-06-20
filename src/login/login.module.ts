import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from 'src/client/model/client.entity';
import { ClientRepository } from 'src/client/repository/client.repository';
import { User } from 'src/user/model/user.entity';
import { UserRepository } from 'src/user/repository/user.repository';
import { LoginController } from './controller/login.controller';
import { LoginService } from './service/login.service';

@Module({
  imports: [TypeOrmModule.forFeature([Client, User])],
  controllers: [LoginController],
  providers: [LoginService,ClientRepository, UserRepository],
})
export class LoginModule {}
