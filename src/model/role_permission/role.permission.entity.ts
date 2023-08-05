import { Column, Entity, ManyToMany, JoinColumn } from 'typeorm';
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

  // Define the many-to-many relation with role
  @ManyToMany(() => RoleEntity, (role) => role.role_permissions)
  @JoinColumn({ name: 'role_id' }) // Specify the foreign key column name
  roles: RoleEntity[];

  // Define the many-to-many relation with permission
  @ManyToMany(
    () => PermissionEntity,
    (permission) => permission.role_permissions,
  )
  @JoinColumn({ name: 'permission_id' }) // Specify the foreign key column name
  permissions: RolePermissionEntity[];
}
