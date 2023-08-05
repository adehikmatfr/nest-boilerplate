import { Column, Entity, ManyToOne } from 'typeorm';
import { RoleEntity } from '../role/role.entity';
import { UserEntity } from '../user/user.entity';

@Entity({
  name: 'user_role',
})
export class UserRoleEntity {
  @Column({ type: 'uuid', primary: true })
  user_id: string;

  @Column({ length: 50, nullable: false, primary: true })
  role_id: string;

  // Define the many-to-one relation with user
  @ManyToOne(() => UserEntity, (user) => user.user_roles)
  user: UserEntity;

  // Define the many-to-one relation with role
  @ManyToOne(() => RoleEntity, (role) => role.user_roles)
  role: RoleEntity;
}
