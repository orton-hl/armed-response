import * as UUID from 'uuid-1345';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

var indexFF = 0;

@Entity()
export class Alert {
  @PrimaryGeneratedColumn('increment')
  @Column()
  id: string;
  @Column()
  userId: string;
  @Column()
  clientId: string;
  @Column()
  emergencyType: number;
  @Column()
  description: string;
  @Column({ default: false })
  isResolved: boolean;
  @Column({ default: false })
  isActive: boolean;
  @Column({ default: false })
  timeStamp: string;

  constructor() {
    this.id = UUID.v5({
      namespace: UUID.namespace.url,
      name: `${indexFF++}`,
    });

    this.userId = '-----5454-------';
    this.clientId = '----5454--------';
    this.emergencyType = 5;
    this.description = '--------5454----';
    this.timeStamp = '--------][][][][----';
    this.isActive = false
    this.isResolved = false

  }
}

export type ResolvePayLoad = {
  id : string,
  description : string,
  timeStamp : string
}