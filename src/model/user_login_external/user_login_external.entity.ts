import { Entity, Column, ManyToOne } from 'typeorm';
import { UserEntity } from '../user/user.entity';

@Entity({
  name: 'user_login_external',
})
export class UserLoginExternalEntity {
  @Column({ type: 'uuid', primary: true })
  userId: string;

  @Column({ length: 50, nullable: false, primary: true })
  channelId: string;

  @Column({ length: 200, nullable: false })
  wsEndPoint: string;

  @Column({ length: 100, nullable: false })
  externalToken: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  // Define the many-to-one relation with user
  @ManyToOne(() => UserEntity, (user) => user.userLoginExternals)
  user: UserEntity;
}
