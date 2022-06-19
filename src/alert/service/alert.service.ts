import { Injectable } from '@nestjs/common';
import { Alert, ResolvePayLoad } from '../model/alert.entity';
import { AlertRepository } from '../repository/alert.repository';

@Injectable()
export class AlertService {
  constructor(private alertRepository: AlertRepository) {}

  getAlerts(): Promise<Alert[]> {
    return this.alertRepository.getAlerts();
  }

  findAlertById(id: string): Promise<Alert> {
    return this.alertRepository.findAlertById(id);
  }

  deleteAlertById(id: string): Promise<Boolean> {
    return this.alertRepository.deleteAlertById(id);
  }

  modifyAlertById(alert: Alert): Promise<Alert> {
    return this.alertRepository.modifyAlertById(alert);
  }

  registerAlert(alert: any): Promise<Alert> {
    return this.alertRepository.registerAlert(alert);
  }

  findAlertByUserId(userId: string) {
    return this.alertRepository.findAlertByUserId(userId);
  }

  findAlertByClientId(clientId: string) {
    return this.alertRepository.findAlertByClientId(clientId);
  }

  findAlertByClientAndUserId(clientId: string, userId: string) {
    return this.alertRepository.findAlertByClientAndUserId(clientId, userId);
  }

  async resolveAlert(payload: ResolvePayLoad) : Promise<Boolean> {
    let upadtedAllert = await this.alertRepository
      .findAlertById(payload.id)
      .then((alert) => {
        alert.description = payload.description;
        alert.timeStamp = payload.timeStamp;
        alert.isActive = false;
        alert.isResolved = false;
        return alert;
      });

    return new Promise( async (resolve, reject) => {
      let updated = await this.alertRepository.modifyAlertById(upadtedAllert);
      if( updated === upadtedAllert ) resolve(true);
      else reject(false)
    });
  }
}
