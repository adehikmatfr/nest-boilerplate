import { ApiResponseProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { BaseModelVM } from '../base_model.vm';
import { UserLoginVM } from '../user_login/user_login.vm';
import { UserLoginExternalVM } from '../user_login_external/user_login_external.vm';
import { UserRoleVM } from '../user_role/user_role.vm';

export class UserVM extends BaseModelVM {
  constructor() {
    super();
  }

  @ApiResponseProperty({
    type: String,
  })
  @Expose()
  id: string;

  @ApiResponseProperty({
    type: String,
  })
  @Expose()
  email: string;

  @ApiResponseProperty({
    type: String,
  })
  @Expose()
  phoneNumber: string;

  @ApiResponseProperty({
    type: String,
  })
  @Expose()
  firstName: string;

  @ApiResponseProperty({
    type: String,
  })
  @Expose()
  lastName: string;

  @ApiResponseProperty({
    type: String,
  })
  @Expose()
  fullName: string;

  @ApiResponseProperty({
    type: String,
  })
  @Expose()
  pictureUrl: string;

  @ApiResponseProperty({
    type: Number,
  })
  @Expose()
  status: number;

  @ApiResponseProperty({
    type: Boolean,
  })
  @Expose()
  isDeleted: boolean;

  @ApiResponseProperty({
    type: String,
  })
  @Expose()
  createdAt: string;

  @ApiResponseProperty({
    type: String,
  })
  @Expose()
  updatedAt: string;

  @ApiResponseProperty({
    type: String,
  })
  @Expose()
  deletedAt: string;

  @ApiResponseProperty({
    type: UserLoginVM,
  })
  @Expose()
  userLogin: UserLoginVM;

  @ApiResponseProperty({
    type: [UserLoginExternalVM],
  })
  @Expose()
  @Type(() => UserLoginExternalVM)
  userLoginExternals: UserLoginExternalVM[];

  @ApiResponseProperty({
    type: [UserRoleVM],
  })
  @Expose()
  @Type(() => UserRoleVM)
  userRoles: UserRoleVM[];
}
