import { Column, Entity, ManyToMany, JoinColumn } from 'typeorm';
import { RoleEntity } from '../role/role.entity';
import { UserEntity } from '../user/user.entity';

@Entity({
  name: 'user_role',
})
export class UserRoleEntity {
  @Column({ type: 'uuid', primary: true })
  user_id: string;

  @Column({ type: 'uuid', primary: true })
  role_id: string;

  // Define the many-to-many relation with role
  @ManyToMany(() => UserEntity, (user) => user.user_roles)
  @JoinColumn({ name: 'user_id' }) // Specify the foreign key column name
  users: UserEntity[];

  // Define the many-to-many relation with role
  @ManyToMany(() => RoleEntity, (role) => role.role_permissions)
  @JoinColumn({ name: 'role_id' }) // Specify the foreign key column name
  roles: RoleEntity[];
}
