import { Body, Controller, Delete, Get, HttpException, HttpStatus, Post, Put, Query} from '@nestjs/common';
import { EmergencyContact } from '../model/emergency-contact.entity';
import { EmergencyContactService } from '../service/emergency-contact.service';

@Controller({
  path: 'emergency-contacts',
})
export class EmergencyContactController {
  constructor(private contactService: EmergencyContactService) {}

  @Get('/get-all')
  getContacts() {
    return this.contactService.getContacts();
  }

  @Get('/get-contact')
  findContactById(@Query('id') id: string) {
    return this.contactService
    .findEmergencyContactById(id)
    .then((data) => data)
    .catch(() => {
      throw new HttpException('Client not found', HttpStatus.BAD_REQUEST);
    });
  }

  @Get('/get-all-conatcts-for-user')
  findAllContactsForUserById(@Query('userId') id: string) {
    return this.contactService
    .findAllContactsForUserById(id)
    .then((data) => data)
    .catch(() => {
      throw new HttpException('Client not found', HttpStatus.BAD_REQUEST);
    });
  }

  @Delete('/delete-contact')
  async deleteContactById(@Query('id') id: string) {
    return this.contactService
      .deleteEmergencyContactById(id)
      .then((data) => {
        return true;
      })
      .catch(() => {
        throw new HttpException('Could not delete contact', HttpStatus.BAD_REQUEST);
      });
  }

  @Put('/update-contact')
  public modifyContactById(@Body() client: EmergencyContact) {
    return this.contactService
      .modifyEmergencyContactById(client)
      .then((data) => {
        return data;
      })
      .catch(() => {
        throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
      });
  }

  @Post('/add-contact')
  async addContact(@Body() client: EmergencyContact) {
    return this.contactService
      .addEmergencyContact(client)
      .then((data) => {
        return data;
      })
      .catch(() => {
        throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
      });
  }
}
