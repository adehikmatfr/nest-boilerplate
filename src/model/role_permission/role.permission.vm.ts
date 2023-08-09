import { ApiResponseProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { PermissionVM } from '../permission/permission.vm';
import { RoleVM } from '../role/role.vm';

export class RolePermissionVM {
  constructor() {}

  @ApiResponseProperty({
    type: String,
  })
  @Expose()
  roleId: string;

  @ApiResponseProperty({
    type: String,
  })
  @Expose()
  permissionId: string;

  @ApiResponseProperty({
    type: RoleVM,
  })
  @Expose()
  role: RoleVM;

  @ApiResponseProperty({
    type: PermissionVM,
  })
  @Expose()
  permission: PermissionVM;
}
