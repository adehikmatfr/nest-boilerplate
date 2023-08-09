import { Column, Entity, OneToMany } from 'typeorm';
import { RolePermissionEntity } from '../role_permission/role.permission.entity';

@Entity({
  name: 'permission',
})
export class PermissionEntity {
  @Column({ length: 50, nullable: false, primary: true })
  id: string;

  @Column({ type: 'text' })
  description: string;

  // Define the one-to-many relation with role_permissions
  @OneToMany(
    () => RolePermissionEntity,
    (rolePermission) => rolePermission.permission,
  )
  rolePermissions: RolePermissionEntity[];
}
