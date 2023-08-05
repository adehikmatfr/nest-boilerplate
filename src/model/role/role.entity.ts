import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { RolePermissionEntity } from '../role_permission/role.permission.entity';

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

  // Define the many-to-many relation with RolePermissionEntity
  @ManyToMany(
    () => RolePermissionEntity,
    (rolePermission) => rolePermission.roles,
  )
  @JoinTable() // Use this decorator on the owning side of the relationship
  role_permissions: RolePermissionEntity[];
}
