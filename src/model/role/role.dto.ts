import { Expose } from 'class-transformer';
import { BaseModelDTO } from '../base_model.dto';

export class RoleDTO extends BaseModelDTO {
  constructor() {
    super();
  }

  @Expose()
  id: string;

  @Expose()
  description: string;
}
