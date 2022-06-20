import { LoginModule } from './login/login.module';
import { LoginService } from './login/service/login.service';
import { LoginController } from './login/controller/login.controller';
import { UserModule } from './User/user.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientModule } from './Client/client.module';
import { EmergencyContactModule } from './emergency-conatcts/client.module';
import { AlertModule } from './alert/alert.module';
import { User } from './User/model/user.entity';
import { Client } from './Client/model/client.entity';
import { EmergencyContact } from './emergency-conatcts/model/emergency-contact.entity';
import { Alert } from './alert/model/alert.entity';
import * as dotenv from 'dotenv';
import { AlertInfo } from './alert/model/alert-info.entity';
dotenv.config();
@Module({
  imports: [
   
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.AR_DB_HOST,
      port: parseInt(process.env.AR_DB_PORT),
      username: process.env.AR_DB_USERNAME,
      password: process.env.AR_DB_PASSWORD,
      database: process.env.AR_DB_DATABASE,
      entities: [User, Client, EmergencyContact, Alert, AlertInfo],
      synchronize: true,
    }),
    LoginModule,
    ClientModule,
    EmergencyContactModule,
    AlertModule,
    UserModule,
  ],
  controllers: [ AppController],
  providers: [LoginService, AppService],
})
export class AppModule {}
