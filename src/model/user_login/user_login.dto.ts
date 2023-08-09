import { Expose } from 'class-transformer';

export class UserLoginDTO {
  constructor() {}

  @Expose()
  userId: string;

  @Expose()
  username: string;

  @Expose()
  passwordHash: string;

  @Expose()
  passwordSalt: string;

  @Expose()
  confirmed: boolean;

  @Expose()
  confirmationStatus: number;

  @Expose()
  confirmationToken: string;

  @Expose()
  confirmationTokenTime: Date;

  @Expose()
  passwordRecoveryToken: string;

  @Expose()
  passwordRecoveryTime: Date;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;
}
