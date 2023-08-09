import { Expose } from 'class-transformer';
import { RoleDTO } from '../role/role.dto';

export class UserRoleDTO {
  constructor() {}

  @Expose()
  userId: string;

  @Expose()
  roleId: string;

  @Expose()
  role: RoleDTO;
}
