import { ApiResponseProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { BaseModelVM } from '../base_model.vm';

export class UserLoginVM extends BaseModelVM {
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
  username: string;

  @ApiResponseProperty({
    type: String,
  })
  @Expose()
  passwordHash: string;

  @ApiResponseProperty({
    type: String,
  })
  @Expose()
  passwordSalt: string;

  @ApiResponseProperty({
    type: Boolean,
  })
  @Expose()
  confirmed: boolean;

  @ApiResponseProperty({
    type: Number,
  })
  @Expose()
  confirmationStatus: number;

  @ApiResponseProperty({
    type: String,
  })
  @Expose()
  confirmationToken: string;

  @ApiResponseProperty({
    type: String,
  })
  @Expose()
  confirmationTokenTime: string;

  @ApiResponseProperty({
    type: String,
  })
  @Expose()
  passwordRecoveryToken: string;

  @ApiResponseProperty({
    type: String,
  })
  @Expose()
  passwordRecoveryTime: string;

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
