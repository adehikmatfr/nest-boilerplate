import { ApiResponseProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class RoleVM {
  constructor() {}

  @ApiResponseProperty({
    type: String,
  })
  @Expose()
  id: string;

  @ApiResponseProperty({
    type: String,
  })
  @Expose()
  description: string;
}
