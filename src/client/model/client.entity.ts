import * as UUID from 'uuid-1345';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

var indexCLi = 100;

@Entity()
export class Client {
  @PrimaryGeneratedColumn('increment')
  @Column()
  id: string;
  @Column()
  username: string;
  @Column()
  key: string;
  @Column()
  name: string;
  @Column()
  password: string;
  @Column()
  postalCode: string;
  @Column()
  address: string;
  @Column({ default: false })
  isActive: boolean;

  constructor() {
    this.id = UUID.v5({
      namespace: UUID.namespace.url,
      name: `${indexCLi++}`,
    });

    this.username = '-----5454-------';
    this.key  = '----5454--------';
    this.name = '-----5454-------';
    this.password = '-----5454-------';
    this.postalCode = '---5454---------';
    this.address = '------5454------';
    this.isActive = false;
  }
}
