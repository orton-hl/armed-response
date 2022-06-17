import { Injectable } from '@nestjs/common';
import { EmergencyContact } from '../model/emergency-contact.entity';
import { EmergencyContactRepository } from '../repository/emergency-contact.repository';

@Injectable()
export class EmergencyContactService {
  constructor(private contactRepository: EmergencyContactRepository) {}

  getContacts(): EmergencyContact[] {
    return this.contactRepository.getUsers();
  }

  findEmergencyContactById(id: string): Promise<EmergencyContact> {
    return this.contactRepository.findEmergencyContactById(id);
  }

  findAllContactsForUserById(id: string): Promise<EmergencyContact[]> {
    return this.contactRepository.findEmergencyContactsForUser(id);
  }

  deleteEmergencyContactById(id: string): Promise<Boolean> {
    return this.contactRepository.deleteEmergencyContactById(id);
  }

  modifyEmergencyContactById(user: EmergencyContact):  Promise<EmergencyContact> {
    return this.contactRepository.modifyEmergencyContactById(user);
  }

  addEmergencyContact(user: EmergencyContact):  Promise<EmergencyContact> {
    return this.contactRepository.addEmergencyContact(user);
  }

  
}
