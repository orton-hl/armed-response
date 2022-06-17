// import { ClientModule } from './Clients/client.module';
import { UserModule } from './User/user.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientModule } from './Client/client.module';
import { EmergencyContactModule } from './emergency-conatcts/client.module';
import { AlertModule } from './alert/alert.module';

@Module({
  imports: [
    ClientModule,
    EmergencyContactModule,
    AlertModule,
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'root',
    //   database: 'test',
    //   entities: [User],
    //   synchronize: true,
    // }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
