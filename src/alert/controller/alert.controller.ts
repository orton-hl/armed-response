import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Alert, ResolvePayLoad } from '../model/alert.entity';
import { AlertService } from '../service/alert.service';



@Controller({
  path: 'alerts',
})
export class AlertController {
  constructor(private alertService: AlertService) {}

  @Get('/get-all-alerts')
  getAlerts() {
    return this.alertService.getAlerts();
  }

  @Get('/get-alert')
  findAlertById(@Query('id') id: string) {
    return this.alertService
      .findAlertById(id)
      .then((data) => data)
      .catch(() => {
        throw new HttpException('Alert not found', HttpStatus.BAD_REQUEST);
      });
  }

  @Delete('/delete-alert')
  async deleteAlertById(@Query('id') id: string) {
    return this.alertService
      .deleteAlertById(id)
      .then((data) => {
        return true;
      })
      .catch(() => {
        throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
      });
  }

  @Put('/update-alert')
  public modifyAlertById(@Body() alert: Alert) {
    return this.alertService
      .modifyAlertById(alert)
      .then((data) => {
        return data;
      })
      .catch(() => {
        throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
      });
  }

  @Post('/send-alert')
  async registerAlert(@Body() alert: Alert) {
    return this.alertService
      .registerAlert(alert)
      .then((data) => {
        return data;
      })
      .catch(() => {
        throw new HttpException('Error', HttpStatus.NOT_FOUND);
      });
  }

  @Patch('/resolve-alert')
  async resolveAlert(@Body() paload: ResolvePayLoad) {
    return this.alertService
      .resolveAlert(paload)
      .then((data) => {
        return data;
      })
      .catch(() => {
        throw new HttpException('Error', HttpStatus.NOT_FOUND);
      });
  }
}
