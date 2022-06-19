import * as UUID from 'uuid-1345';
import { Column, Entity, Generated, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { EmergencyContact } from 'src/emergency-conatcts/model/emergency-contact.entity';

@Entity()
export class User {
  @PrimaryColumn()
  @Generated('uuid')
  id: string;
  @Column()
  username: string;
  @Column()
  firstname: string;
  @Column()
  lastname: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  postalCode: string;
  @Column()
  address: string;
  @Column()
  phoneNumber: string;
  @Column({ default: false , nullable: false})
  isActive: boolean;
  @OneToMany(type => EmergencyContact, EmergencyContact => EmergencyContact.id)
  contacts : String[]
  
}
