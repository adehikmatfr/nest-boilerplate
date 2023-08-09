import { Expose } from 'class-transformer';

export class UserLoginExternalDTO {
  constructor() {}

  @Expose()
  userId: string;

  @Expose()
  channelId: string;

  @Expose()
  wsEndPoint: string;

  @Expose()
  externalToken: string;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;
}
