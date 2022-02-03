import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Profile } from '../../profile/entities/profile.entity';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: number;

  @Column()
  email: string;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'is_active' })
  isActive: boolean;

  @Column()
  phone: string;

  @Column()
  cpf: string;

  @OneToOne(() => Profile)
  @JoinColumn()
  profile: Profile;
}
