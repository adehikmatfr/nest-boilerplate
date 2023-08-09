import { ApiResponseProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class PermissionVM {
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
