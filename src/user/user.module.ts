import { UserService } from './service/user.service';
import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserRepository } from './repository/user.repository';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, UserRepository]
})
export class UserModule {}
