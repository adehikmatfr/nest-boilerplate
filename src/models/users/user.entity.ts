import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'user',
})
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: null, length: 100, nullable: true })
  name: string;

  @Column({ default: null, length: 100, unique: true })
  username: string;

  @Column({ unique: true, type: 'text' })
  email: string;
}
