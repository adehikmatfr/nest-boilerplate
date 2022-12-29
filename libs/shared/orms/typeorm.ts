import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

import { EnvConfig } from '../configs/env/env-config';

@Injectable()
export class TypeOrm implements TypeOrmOptionsFactory {
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
      entities: ['dist/**/*.entity.{js}'],
      migrations: ['dist/migrations/*.{js}'],
      migrationsTableName: 'typeorm_migrations',
      logger: 'file',
      synchronize,
      autoLoadEntities: true
    };
  }
}
