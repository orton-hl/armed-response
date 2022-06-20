import { Column, Entity, Generated, PrimaryColumn } from 'typeorm';

@Entity()
export class AlertInfo {
  @PrimaryColumn()
  @Generated('uuid')
  id: string;
  @Column()
  userId: string;
  @Column({nullable: true})
  alertId: string;
  @Column()
  logitude?: string;
  @Column()
  latitude?: string;
}

