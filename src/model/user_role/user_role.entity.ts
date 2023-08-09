import { Column, Entity, ManyToOne } from 'typeorm';
import { RoleEntity } from '../role/role.entity';
import { UserEntity } from '../user/user.entity';

@Entity({
  name: 'user_role',
})
export class UserRoleEntity {
  @Column({ type: 'uuid', primary: true })
  userId: string;

  @Column({ length: 50, nullable: false, primary: true })
  roleId: string;

  // Define the many-to-one relation with user
  @ManyToOne(() => UserEntity, (user) => user.userRoles)
  user: UserEntity;

  // Define the many-to-one relation with role
  @ManyToOne(() => RoleEntity, (role) => role.userRoles)
  role: RoleEntity;
}
