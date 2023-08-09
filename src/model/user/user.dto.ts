import { Expose, Type } from 'class-transformer';
import { UserLoginDTO } from '../user_login/user_login.dto';
import { UserLoginExternalDTO } from '../user_login_external/user_login_external.dto';
import { UserRoleDTO } from '../user_role/user_role.dto';

export class UserDTO {
  constructor() {}

  @Expose()
  id: string;

  @Expose()
  email: string;

  @Expose()
  phoneNumber: string;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  @Expose()
  fullName: string;

  @Expose()
  pictureUrl: string;

  @Expose()
  status: number;

  @Expose()
  isDeleted: boolean;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;

  @Expose()
  deletedAt: Date;

  @Expose()
  userLogin: UserLoginDTO;

  @Expose()
  @Type(() => UserLoginExternalDTO)
  userLoginExternals: UserLoginExternalDTO[];

  @Expose()
  @Type(() => UserRoleDTO)
  userRoles: UserRoleDTO[];
}
