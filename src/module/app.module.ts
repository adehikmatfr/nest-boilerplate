import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModelValidatorPipe } from '@shared/pipes/model-validator/model-validator';

import { TypeOrm } from '../../libs/shared/orms/typeorm';
import { AppController } from '../controllers/app/app.controller';
import { AppService } from '../services/app/app.service';

@Module({
  imports: [TypeOrmModule.forRootAsync({ useClass: TypeOrm })],
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
    // controllers modules
  ],
})
export class AppModule {}
