import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { EnvConfig } from '@shared/configs/env/env-config';

import { UserEntity } from '../../models/users/user.entity';

@Injectable()
export class TypeOrmService implements TypeOrmOptionsFactory {
  constructor() {}

  public createTypeOrmOptions(): TypeOrmModuleOptions {
    const { type, host, port, database, username, password, synchronize } =
      EnvConfig.get('rdbms');
    return {
      type,
      host,
      port,
      database,
      username,
      password,
      entities: [UserEntity],
      logger: 'file',
      synchronize,
      autoLoadEntities: true,
    };
  }
}
