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
} from '@nestjs/common';
import { User } from '../model/user.entity';
import { UserService } from '../service/user.service';

@Controller({
  path: 'users',
})
export class UserController {
  constructor(private service: UserService) {}

  @Get('/get-all-users')
  getUsers() {
    return this.service
      .getUsers()
      .then((data) => data)
      .catch(() => {
        throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
      });
  }

  @Get('/get-user')
  findUserById(@Query('id') id: string) {
    return this.service
      .findUserById(id)
      .then((data) => data)
      .catch(() => {
        throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
      });
  }

  @Delete('/delete-user')
  async deleteUserById(@Query('id') id: string) {
    return this.service
      .deleteUserById(id)
      .then((data) => {
        return true;
      })
      .catch(() => {
        throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
      });
  }

  @Put('/update-user')
  public modifyUserById(@Body() user: User) {
    return this.service
      .modifyUserById(user)
      .then((data) => {
        return data;
      })
      .catch(() => {
        throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
      });
  }

  @Post('/register-user')
  async registerUser(@Body() user: User) {
    return this.service
      .registerUser(user)
      .then((data) => {
        return data;
      })
      .catch(() => {
        throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
      });
  }
}
