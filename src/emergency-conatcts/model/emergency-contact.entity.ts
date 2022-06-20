import { Column, Entity, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { User } from 'src/user/model/user.entity';

var indexCL = 100;

@Entity()
export class EmergencyContact {
  @PrimaryColumn()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(type => User, user => user.id)
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
}
