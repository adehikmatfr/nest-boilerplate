import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
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

  // Define the many-to-many relation with RolePermissionEntity
  @ManyToMany(
    () => RolePermissionEntity,
    (rolePermission) => rolePermission.permissions,
  )
  @JoinTable() // Use this decorator on the owning side of the relationship
  role_permissions: RolePermissionEntity[];
}
