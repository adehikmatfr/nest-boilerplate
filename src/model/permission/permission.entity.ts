import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { RolePermissionEntity } from '../role_permission/role.permission.entity';

@Entity({
  name: 'permission',
})
export class PermissionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50, nullable: false, primary: true })
  permission_name: string;

  @Column({ type: 'text' })
  description: string;

  // Define the one-to-many relation with role_permissions
  @OneToMany(
    () => RolePermissionEntity,
    (rolePermission) => rolePermission.permission,
  )
  role_permissions: RolePermissionEntity[];
}
