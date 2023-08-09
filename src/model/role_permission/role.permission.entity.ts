import { Column, Entity, ManyToOne } from 'typeorm';
import { PermissionEntity } from '../permission/permission.entity';
import { RoleEntity } from '../role/role.entity';
@Entity({
  name: 'role_permission',
})
export class RolePermissionEntity {
  @Column({ length: 50, nullable: false, primary: true })
  roleId: string;

  @Column({ length: 50, nullable: false, primary: true })
  permissionId: string;

  // Define the many-to-one relation with role
  @ManyToOne(() => RoleEntity, (role) => role.rolePermissions)
  role: RoleEntity;

  // Define the many-to-one relation with permission
  @ManyToOne(() => PermissionEntity, (permission) => permission.rolePermissions)
  permission: PermissionEntity;
}
