import * as UUID from 'uuid-1345';
import { Column, Entity, Generated, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Client {
  @PrimaryColumn()
  @Generated('uuid')
  id: string;
  @Generated('uuid')
  @Column({nullable : true})
  key?: string;
  @Column()
  name: string;
  @Column()
  postalCode: string;
  @Column()
  address: string;
  @Column({ default: false })
  isActive: boolean;
}
