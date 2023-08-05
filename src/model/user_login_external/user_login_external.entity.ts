import { Entity, Column, ManyToOne } from 'typeorm';
import { UserEntity } from '../user/user.entity';

@Entity({
  name: 'user_login_external',
})
export class UserLoginExternalEntity {
  @Column({ type: 'uuid', primary: true })
  user_id: string;

  @Column({ length: 50, nullable: false, primary: true })
  channel_id: string;

  @Column({ length: 200, nullable: false })
  ws_end_point: string;

  @Column({ length: 100, nullable: false })
  external_token: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;

  // Define the many-to-one relation with user
  @ManyToOne(() => UserEntity, (user) => user.user_login_externals)
  user: UserEntity;
}
