import { Module } from '@nestjs/common';

import { AppController } from '../controllers/app/app.controller';
import { AppService } from '../services/app/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: 'IAppService',
      useClass: AppService,
    },
  ],
})
export class AppModule {}
