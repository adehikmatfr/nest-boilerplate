import { Column, Entity, ManyToOne } from 'typeorm';
import { PermissionEntity } from '../permission/permission.entity';
import { RoleEntity } from '../role/role.entity';
@Entity({
  name: 'role_permission',
})
export class RolePermissionEntity {
  @Column({ type: 'uuid', primary: true })
  role_id: string;

  @Column({ type: 'uuid', primary: true })
  permission_id: string;

  // Define the many-to-one relation with role
  @ManyToOne(() => RoleEntity, (role) => role.role_permissions)
  role: RoleEntity;

  // Define the many-to-one relation with permission
  @ManyToOne(
    () => PermissionEntity,
    (permission) => permission.role_permissions,
  )
  permission: PermissionEntity;
}
