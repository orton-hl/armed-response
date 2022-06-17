import { Injectable } from '@nestjs/common';
import { Alert, ResolvePayLoad } from '../model/alert.entity';


@Injectable()
export class AlertRepository {
  
  private alerts: Alert[] = new Array();

  constructor() {
    for (let i = 0; i < 1; i++) {
      this.alerts.push(new Alert());
    }
  }

  getAlerts(): Alert[] {
    return this.alerts;
  }

  async findAlertById(id: string): Promise<Alert> {
    return new Promise<Alert>((resolve, reject) => {
      let alert = this.alerts.find((alert) => alert.id === id);
      if (alert === undefined) reject(null);
      else resolve(alert);
    });
  }


  async findAlertByUserId(userId: string): Promise<Alert[]> {
    return new Promise<Alert[]>((resolve, reject) => {
      resolve(this.alerts.filter((alert) => alert.userId === userId));
    });
  }

  async findAlertByClientId(clientId: string): Promise<Alert[]> {
    return new Promise<Alert[]>((resolve, reject) => {
      resolve(this.alerts.filter((alert) => alert.clientId === clientId));
    });
  }

  async findAlertByClientAndUserId(clientId: string, userId: string): Promise<Alert[]> {
    return new Promise<Alert[]>((resolve, reject) => {
      resolve(this.alerts.filter((alert) => alert.clientId === clientId  && alert.userId === userId ));
    });
  }

  async deleteAlertById(id: string): Promise<Boolean> {
    let alert = await this.findAlertById(id);
    return new Promise<Boolean>((resolve, reject) => {
      let index = this.alerts.indexOf(alert);
      if (index == -1) reject(false);
      this.alerts.splice(index, 1);
      resolve(true);
    });
  }

  public modifyAlertById(alert: Alert): Promise<Alert> {
    return new Promise<Alert>((resolve, reject) => {
      let index = this.alerts.findIndex((x) => x.id === alert.id);
      if (index == -1) reject(null);
      this.alerts[index] = alert;
      resolve(this.alerts[index]);
    });
  }

  public registerAlert(alert: any): Promise<Alert> {
    return new Promise<Alert>((resolve, reject) => {
      let newAlert = Object.assign(new Alert(), alert);
      this.alerts.push(newAlert);
      resolve(newAlert);
    });
  }
}
