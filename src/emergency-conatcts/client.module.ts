import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmergencyContactController } from './controller/emergency-contact.controller';
import { EmergencyContact } from './model/emergency-contact.entity';
import { EmergencyContactRepository } from './repository/emergency-contact.repository';
import { EmergencyContactService } from './service/emergency-contact.service';

@Module({
    imports: [TypeOrmModule.forFeature([EmergencyContact])],
    controllers: [EmergencyContactController],
    providers: [EmergencyContactRepository, EmergencyContactService],
})
export class EmergencyContactModule {}
