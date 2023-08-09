import { ApiResponseProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { BaseModelVM } from '../base_model.vm';

export class UserLoginExternalVM extends BaseModelVM {
  constructor() {
    super();
  }

  @ApiResponseProperty({
    type: String,
  })
  @Expose()
  userId: string;

  @ApiResponseProperty({
    type: String,
  })
  @Expose()
  channelId: string;

  @ApiResponseProperty({
    type: String,
  })
  @Expose()
  wsEndPoint: string;

  @ApiResponseProperty({
    type: String,
  })
  @Expose()
  externalToken: string;

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
}
