import { Column, Entity, OneToOne, JoinColumn } from 'typeorm';
import { UserEntity } from '../user/user.entity';

@Entity({
  name: 'user_login',
})
export class UserLoginEntity {
  @Column({ type: 'uuid', primary: true })
  userId: string;

  @Column({ length: 100, nullable: false, unique: true })
  username: string;

  @Column({ length: 250, nullable: false })
  passwordHash: string;

  @Column({ length: 100, nullable: false })
  passwordSalt: string;

  @Column({ nullable: false })
  confirmed: boolean;

  @Column({ nullable: false })
  confirmationStatus: number;

  @Column({ length: 100 })
  confirmationToken: string;

  @Column({ type: 'timestamp' })
  confirmationTokenTime: Date;

  @Column({ length: 100 })
  passwordRecoveryToken: string;

  @Column({ type: 'timestamp' })
  passwordRecoveryTime: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  // Define the one-to-one relation with user
  @OneToOne(() => UserEntity, (user) => user.userLogin)
  @JoinColumn({ name: 'user_id' }) // Specify the foreign key column name
  user: UserEntity;
}
