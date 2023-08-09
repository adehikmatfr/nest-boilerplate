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
  phoneNumber: string;

  @Column({ length: 50, nullable: false })
  firstName: string;

  @Column({ length: 50, nullable: false })
  lastName: string;

  @Column({ length: 50, nullable: false })
  fullName: string;

  @Column({ length: 100 })
  pictureUrl: string;

  @Column({ nullable: false })
  status: number;

  @Column({ nullable: false })
  isDeleted: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @Column({ type: 'timestamp' })
  deletedAt: Date;

  // Define the one-to-one relation with user_login
  @OneToOne(() => UserLoginEntity, (userLogin) => userLogin.user, {
    cascade: true,
  })
  userLogin: UserLoginEntity;

  // Define the one-to-many relation with user_login_external
  @OneToMany(
    () => UserLoginExternalEntity,
    (userLoginExternal) => userLoginExternal.user,
  )
  userLoginExternals: UserLoginExternalEntity[];

  // Define the one-to-many relation with user_roles
  @OneToMany(() => UserRoleEntity, (userRole) => userRole.role)
  userRoles: UserRoleEntity[];
}
