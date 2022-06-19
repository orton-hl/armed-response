import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmergencyContact } from '../model/emergency-contact.entity';

@Injectable()
export class EmergencyContactRepository {
  constructor(
    @InjectRepository(EmergencyContact)
    private repository: Repository<EmergencyContact>,
  ) {}

  getEmergencyContact(): Promise<EmergencyContact[]> {
    return this.repository.find();
  }

  async findEmergencyContactById(id: string): Promise<EmergencyContact> {
    return new Promise<EmergencyContact>((resolve, reject) => {
      this.repository.findOneBy({ id: id }).then((data) => {
        if (data == null || data === undefined) reject();
        else resolve(data);
      });
    });
  }

  async findEmergencyContactsForUser(
    userId: string,
  ): Promise<EmergencyContact[]> {
    return new Promise<EmergencyContact[]>((resolve, reject) => {
      this.repository.findBy({ userId: userId }).then((data) => {
        if (data == null || data === undefined) reject();
        else resolve(data);
      });
    });
  }

  async deleteEmergencyContactsForUser(userId: string): Promise<Boolean> {
    return new Promise<Boolean>((resolve, reject) => {
      this.repository
        .delete({ userId: userId })
        .then(() => resolve(true))
        .catch(() => reject());
    });
  }

  async deleteEmergencyContactById(id: string): Promise<Boolean> {
    return new Promise<Boolean>((resolve, reject) => {
      this.repository
        .delete({ id: id })
        .then(() => resolve(true))
        .catch(() => reject());
    });
  }

  public modifyEmergencyContactById(
    contact: EmergencyContact,
  ): Promise<EmergencyContact> {
    return new Promise<EmergencyContact>((resolve, reject) => {
      this.findEmergencyContactById(contact.id)
        .then(() => {
          return this.repository.save(contact);
        })
        .then((newContact) => resolve(newContact))
        .catch(() => reject());
    });
  }

  public addEmergencyContact(
    contact: EmergencyContact,
  ): Promise<EmergencyContact> {
    return new Promise<EmergencyContact>((resolve, reject) => {
      return this.repository
        .save(contact)
        .then((emergencyContact) => resolve(emergencyContact))
        .catch(() => reject());
    });
  }
}
