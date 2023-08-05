import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { EnvConfig } from '@shared/config/env_config';
import { join } from 'path';

@Injectable()
export class TypeOrmService implements TypeOrmOptionsFactory {
  constructor() {}

  public createTypeOrmOptions(): TypeOrmModuleOptions {
    const pathEntities = join(__dirname, '..', 'model', '**', '*.entity.ts');
    const { type, host, port, database, username, password, synchronize } =
      EnvConfig.get('rdbms');
    return {
      type,
      host,
      port,
      database,
      username,
      password,
      entities: [pathEntities],
      logger: 'file',
      synchronize,
      autoLoadEntities: true,
    };
  }
}
