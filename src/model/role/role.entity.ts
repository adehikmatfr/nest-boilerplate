import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { RolePermissionEntity } from '../role_permission/role.permission.entity';
import { UserRoleEntity } from '../user_role/user_role.entity';

@Entity({
  name: 'role',
})
export class RoleEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50, nullable: false, primary: true })
  role_name: string;

  @Column({ type: 'text' })
  description: string;

  // Define the one-to-many relation with user_roles
  @OneToMany(() => UserRoleEntity, (userRole) => userRole.role)
  user_roles: UserRoleEntity[];

  // Define the one-to-many relation with role_permissions
  @OneToMany(
    () => RolePermissionEntity,
    (rolePermission) => rolePermission.permission,
  )
  role_permissions: RolePermissionEntity[];
}
