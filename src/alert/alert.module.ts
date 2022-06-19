import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from 'src/User/service/user.service';
import { AlertController } from './controller/alert.controller';
import { Alert } from './model/alert.entity';
import { AlertRepository } from './repository/alert.repository';
import { AlertService } from './service/alert.service';

@Module({
  imports: [TypeOrmModule.forFeature([Alert])],
  controllers: [AlertController],
  providers: [AlertRepository, AlertService],
})
export class AlertModule {}
