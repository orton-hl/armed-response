import { Injectable } from '@nestjs/common';
import { concat } from 'rxjs';
import { Repository } from 'typeorm';
import { EmergencyContact } from '../model/emergency-contact.entity';

@Injectable()
export class EmergencyContactRepository {
  private emergencyContacts: EmergencyContact[] = new Array();

  constructor() {
    for (let i = 0; i < 1; i++) {
      this.emergencyContacts.push(new EmergencyContact());
    }
  }

  getUsers(): EmergencyContact[] {
    return this.emergencyContacts;
  }

  async findEmergencyContactById(id: string): Promise<EmergencyContact> {
    return new Promise<EmergencyContact>((resolve, reject) => {
      let contact = this.emergencyContacts.find((contact) => contact.id === id);
      if (contact === undefined) reject(null);
      else resolve(contact);
    });
  }

  async findEmergencyContactsForUser(
    userId: string,
  ): Promise<EmergencyContact[]> {
    return new Promise<EmergencyContact[]>((resolve, reject) => {
      resolve(this.emergencyContacts.filter((contact) => contact.userId === userId));
    });
  }

  async deleteEmergencyContactsForUser(userId: string): Promise<Boolean> {
    return new Promise<Boolean>((resolve, reject) => {
      this.emergencyContacts
        .filter((contact) => contact.userId === userId)
        .map(async (contact) => {
          await this.deleteEmergencyContactById(contact.id)
            .then(() => true)
            .catch(() => {
              reject(concat);
            });
        });
      resolve(true);
    });
  }

  async deleteEmergencyContactById(id: string): Promise<Boolean> {
    let contact = await this.findEmergencyContactById(id);
    return new Promise<Boolean>((resolve, reject) => {
      let index = this.emergencyContacts.indexOf(contact);
      if (index == -1) reject(false);
      this.emergencyContacts.splice(index, 1);
      resolve(true);
    });
  }

  public modifyEmergencyContactById(
    contact: EmergencyContact,
  ): Promise<EmergencyContact> {
    return new Promise<EmergencyContact>((resolve, reject) => {
      let index = this.emergencyContacts.findIndex((x) => x.id === contact.id);
      if (index == -1) reject(null);
      this.emergencyContacts[index] = contact;
      resolve(this.emergencyContacts[index]);
    });
  }

  public addEmergencyContact(contact: EmergencyContact): Promise<EmergencyContact> {
    return new Promise<EmergencyContact>((resolve, reject) => {
      let newUser = Object.assign(new EmergencyContact(), contact);
      this.emergencyContacts.push(newUser);
      resolve(newUser);
    });
  }
}
