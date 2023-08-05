import { Column, Entity, OneToOne, JoinColumn } from 'typeorm';
import { UserEntity } from '../user/user.entity';

@Entity({
  name: 'user_login',
})
export class UserLoginEntity {
  @Column({ type: 'uuid', primary: true })
  user_id: string;

  @Column({ length: 100, nullable: false, unique: true })
  username: string;

  @Column({ length: 250, nullable: false })
  password_hash: string;

  @Column({ length: 100, nullable: false })
  password_salt: string;

  @Column({ nullable: false })
  confirmed: boolean;

  @Column({ nullable: false })
  confirmation_status: number;

  @Column({ length: 100 })
  confirmation_token: string;

  @Column({ type: 'timestamp' })
  confirmation_token_time: Date;

  @Column({ length: 100 })
  password_recovery_token: string;

  @Column({ type: 'timestamp' })
  password_recovery_time: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;

  // Define the one-to-one relation with user
  @OneToOne(() => UserEntity, (user) => user.user_login)
  @JoinColumn({ name: 'user_id' }) // Specify the foreign key column name
  user: UserEntity;
}
