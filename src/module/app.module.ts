import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogInterceptorService } from '@shared/logger/log-interceptor.service';
import { ModelValidatorPipe } from '@shared/pipe/model-validator.pipe';

import { AppController } from '../controller/app/app.controller';
import { UserEntity } from '../model/user/user.entity';
import { AppService } from '../service/app/app.service';
import { TypeOrmService } from '../service/orm/typeorm.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useClass: TypeOrmService }),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [AppController],
  providers: [
    {
      provide: 'IModelValidatorPipe',
      useClass: ModelValidatorPipe,
    },
    // service modules
    {
      provide: 'IAppService',
      useClass: AppService,
    },
    {
      provide: 'ILogInterceptorService',
      useClass: LogInterceptorService,
    },
    // controllers modules
  ],
})
export class AppModule {}
