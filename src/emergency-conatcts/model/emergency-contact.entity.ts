import * as UUID from 'uuid-1345';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

var indexCL = 100;

@Entity()
export class EmergencyContact {
  @PrimaryGeneratedColumn('increment')
  @Column()
  id: string;
  @Column()
  userId: string;
  @Column()
  firstname: string;
  @Column()
  lastname: string;
  @Column()
  email: string;
  @Column()
  postalCode: string;
  @Column()
  address: string;
  @Column({ default: false })
  isActive: boolean;

  constructor() {
    this.id = UUID.v5({
      namespace: UUID.namespace.url,
      name: `${indexCL++}`,
    });

    this.userId = '-----5454-------';
    this.firstname  = '----5454--------';
    this.lastname = '-----5454-------';
    this.email = '-----5454-------';
    this.postalCode = '---5454---------';
    this.address = '------5454------';
    this.isActive = false;
  }
}
