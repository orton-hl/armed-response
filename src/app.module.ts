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
import { getEnvPath } from './common/helper/env.helper';
@Module({
  imports: [
    ClientModule,
    EmergencyContactModule,
    AlertModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '192.168.0.107',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'postgres',
      entities: [User, Client, EmergencyContact, Alert],
      synchronize: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
