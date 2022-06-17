import * as UUID from 'uuid-1345';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

var index = 0;

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  @Column()
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
  @Column({ default: false })
  isActive: boolean;

  constructor() {
    this.id = UUID.v5({
      namespace: UUID.namespace.url,
      name: `${index++}`,
    });

    this.username = '-----5454-------';
    this.firstname = '----5454--------';
    this.lastname = '-----5454-------';
    this.email = '--------5454----';
    this.password = '-----5454-------';
    this.postalCode = '---5454---------';
    this.address = '------5454------';
    this.phoneNumber = '--5454----------';
    this.isActive = false;
  }
}
