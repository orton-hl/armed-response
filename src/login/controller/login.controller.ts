import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { Credentials } from 'src/shared/models';
import { LoginService } from '../service/login.service';

@Controller()
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Post('login')
  async login(@Body() credentials: Credentials) {
    return this.loginService
      .handleLogin(credentials)
      .then((data) => data)
      .catch(() => {
        throw new HttpException('User / Client not found', HttpStatus.NOT_FOUND);
      });
  }
}
