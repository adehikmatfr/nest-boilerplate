import { Column, Entity, OneToMany } from 'typeorm';
import { RolePermissionEntity } from '../role_permission/role.permission.entity';
import { UserRoleEntity } from '../user_role/user_role.entity';

@Entity({
  name: 'role',
})
export class RoleEntity {
  @Column({ length: 50, nullable: false, primary: true })
  id: string;

  @Column({ type: 'text' })
  description: string;

  // Define the one-to-many relation with user_roles
  @OneToMany(() => UserRoleEntity, (userRole) => userRole.role)
  userRoles: UserRoleEntity[];

  // Define the one-to-many relation with role_permissions
  @OneToMany(
    () => RolePermissionEntity,
    (rolePermission) => rolePermission.permission,
  )
  rolePermissions: RolePermissionEntity[];
}
