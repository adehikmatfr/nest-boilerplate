import { Module } from '@nestjs/common';
import { ModelValidatorPipe } from '@shared/pipe/model-validator/model-validator';

import { AppController } from '../controllers/app/app.controller';
import { AppService } from '../services/app/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: 'IModelValidatorPipe',
      useClass: ModelValidatorPipe,
    },
    {
      provide: 'IAppService',
      useClass: AppService,
    },
  ],
})
export class AppModule {}
