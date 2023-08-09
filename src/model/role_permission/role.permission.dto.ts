import { Expose } from 'class-transformer';
import { BaseModelDTO } from '../base_model.dto';
import { PermissionDTO } from '../permission/permission.dto';
import { RoleDTO } from '../role/role.dto';

export class RolePermissionDTO extends BaseModelDTO {
  constructor() {
    super();
  }

  @Expose()
  roleId: string;

  @Expose()
  permissionId: string;

  @Expose()
  role: RoleDTO;

  @Expose()
  permission: PermissionDTO;
}
