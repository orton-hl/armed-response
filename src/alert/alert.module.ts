import { Module } from '@nestjs/common';
import { UserService } from 'src/User/service/user.service';
import { AlertController } from './controller/alert.controller';
import { AlertRepository } from './repository/alert.repository';
import { AlertService } from './service/alert.service';

@Module({
  imports: [],
  controllers: [AlertController],
  providers: [AlertRepository, AlertService],
})
export class AlertModule {}
