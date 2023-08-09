import { ApiResponseProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { RoleVM } from '../role/role.vm';

export class UserRoleVM {
  constructor() {}

  @ApiResponseProperty({
    type: String,
  })
  @Expose()
  userId: string;

  @ApiResponseProperty({
    type: String,
  })
  @Expose()
  roleId: string;

  @ApiResponseProperty({
    type: RoleVM,
  })
  @Expose()
  role: RoleVM;
}
