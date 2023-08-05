import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { UserLoginEntity } from '../user_login/user_login.entity';
import { UserLoginExternalEntity } from '../user_login_external/user_login_external.entity';
import { UserRoleEntity } from '../user_role/user_role.entity';

@Entity({
  name: 'user',
})
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100, nullable: false, unique: true })
  email: string;

  @Column({ length: 12, nullable: false, unique: true })
  phone_number: string;

  @Column({ length: 50, nullable: false })
  first_name: string;

  @Column({ length: 50, nullable: false })
  last_name: string;

  @Column({ length: 50, nullable: false })
  full_name: string;

  @Column({ length: 100 })
  picture_url: string;

  @Column({ nullable: false })
  status: number;

  @Column({ nullable: false })
  is_deleted: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;

  @Column({ type: 'timestamp' })
  deleted_at: Date;

  // Define the one-to-one relation with user_login
  @OneToOne(() => UserLoginEntity, (userLogin) => userLogin.user, {
    cascade: true,
  })
  user_login: UserLoginEntity;

  // Define the one-to-many relation with user_login_external
  @OneToMany(
    () => UserLoginExternalEntity,
    (userLoginExternal) => userLoginExternal.user,
  )
  user_login_externals: UserLoginExternalEntity[];

  // Define the one-to-many relation with user_roles
  @OneToMany(() => UserRoleEntity, (userRole) => userRole.role)
  user_roles: UserRoleEntity[];
}
