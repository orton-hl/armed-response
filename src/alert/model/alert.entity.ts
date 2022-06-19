import { Column, Entity, Generated, PrimaryColumn } from 'typeorm';

@Entity()
export class Alert {
  @PrimaryColumn()
  @Generated('uuid')
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
}

export type ResolvePayLoad = {
  id: string;
  description: string;
  timeStamp: string;
};
