import { Module } from '@nestjs/common';
import { EmergencyContactController } from './controller/emergency-contact.controller';
import { EmergencyContactRepository } from './repository/emergency-contact.repository';
import { EmergencyContactService } from './service/emergency-contact.service';

@Module({
    imports: [],
    controllers: [EmergencyContactController],
    providers: [EmergencyContactRepository, EmergencyContactService],
})
export class EmergencyContactModule {}
