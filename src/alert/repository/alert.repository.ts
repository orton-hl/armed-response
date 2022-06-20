import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AlertInfo } from '../model/alert-info.entity';
import { Alert, ResolvePayLoad } from '../model/alert.entity';

@Injectable()
export class AlertRepository {

  constructor(
    @InjectRepository(Alert) private alertRepository: Repository<Alert>,
    @InjectRepository(Alert) private alertInfoRepository: Repository<AlertInfo>,
  ) {}

  getAlerts(): Promise<Alert[]> {
    return this.alertRepository.find();
  }

  async findAlertById(id: string): Promise<Alert> {
    return new Promise<Alert>(async (resolve, reject) => {
      let user = await this.alertRepository.findOneBy({id:id})
      if(user === null) reject()
      else resolve(user);
    });
  }

  async findAlertByUserId(userId: string): Promise<Alert[]> {

    return new Promise<Alert[]>(async (resolve, reject) => {
      let user = await this.alertRepository.findBy({userId:userId})
      if(user === null) reject()
      else resolve(user);
    });

  }

  async findAlertByClientId(clientId: string): Promise<Alert[]> {

    return new Promise<Alert[]>(async (resolve, reject) => {
      let user = await this.alertRepository.findBy({clientId:clientId})
      if(user === null) reject()
      else resolve(user);
    });
  }

  async findAlertByClientAndUserId(clientId: string, userId: string): Promise<Alert[]> {
    return new Promise<Alert[]>(async (resolve, reject) => {
      let user = await this.alertRepository.findBy({clientId:clientId,   userId:userId})
      if(user === null) reject()
      else resolve(user);
    });
  }

  async deleteAlertById(id: string): Promise<Boolean> {
    return new Promise<Boolean>((resolve, reject) => {
      this.alertRepository.delete({id:id})
      .then(() => resolve(true))
      .catch(() => reject())
    });
  }

  public modifyAlertById(alert: Alert): Promise<Alert> {
    return new Promise<Alert>((resolve, reject) => {
      this.findAlertByClientId(alert.id)
        .then(() => {
          return this.alertRepository.save(alert);
        })
        .then((newUser) => resolve(newUser))
        .catch(() => reject());
    });
  }

  public registerAlert(alert: Alert): Promise<Alert> {
    return new Promise<Alert>((resolve, reject) => {
      this.alertRepository
        .save(alert)
        .then((newUser) => resolve(newUser))
        .catch(() => reject());
    });
  }

  public postAlertInfo(alertInfo : AlertInfo) : Promise<Boolean>{
    return new Promise<Boolean>((resolve, reject)=>{
      this.alertInfoRepository.save(alertInfo)
      .then(() => resolve(true))
      .catch(() => resolve(false))
    })
  }

  public getAlertInfo(userId : string) : Promise<AlertInfo[]>{
    return this.alertInfoRepository.findBy({userId : userId})
  }
}
