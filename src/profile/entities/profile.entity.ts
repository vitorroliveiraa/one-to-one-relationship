import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'profile' })
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  photo: string;

  @Column()
  phone: string;

  @Column()
  about: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  country: string;
}
