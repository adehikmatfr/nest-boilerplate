import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogInterceptorServiceImpl } from '@shared/logger/log_interceptor_impl.service';
import { ModelValidatorPipeImpl } from '@shared/pipe/model_validator_impl.pipe';

import { AppController } from '../controller/app/app.controller';
import { AppServiceImpl } from '../service/app/app_impl.service';
import { TypeOrmService } from '../service/orm/typeorm.service';
import { PermissionModule } from './permission.module';
import { RoleModule } from './role.module';
import { RolePermissionModule } from './role_permission.module';
import { UserModule } from './user.module';
import { UserLoginModule } from './user_login.module';
import { UserLoginExternalModule } from './user_login_external.module';
import { UserRoleModule } from './user_role.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useClass: TypeOrmService }),
    RoleModule,
    PermissionModule,
    RolePermissionModule,
    UserModule,
    UserRoleModule,
    UserLoginModule,
    UserLoginExternalModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: 'IModelValidatorPipe',
      useClass: ModelValidatorPipeImpl,
    },
    // service modules
    {
      provide: 'IAppService',
      useClass: AppServiceImpl,
    },
    {
      provide: 'ILogInterceptorService',
      useClass: LogInterceptorServiceImpl,
    },
    // controllers modules
  ],
})
export class AppModule {}
