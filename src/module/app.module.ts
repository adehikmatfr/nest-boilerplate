import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModelValidatorPipe } from '@shared/pipes/model-validator/model-validator';

import { AppController } from '../controllers/app/app.controller';
import { UserEntity } from '../models/users/user.entity';
import { AppService } from '../services/app/app.service';
import { TypeOrmService } from '../services/orm/typeorm.service';

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
    // controllers modules
  ],
})
export class AppModule {}
