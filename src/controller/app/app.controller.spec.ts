import { Test, TestingModule } from '@nestjs/testing';

import { AppServiceImpl } from '../../service/app/app_impl.service';
import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: 'AppService',
          useClass: AppServiceImpl,
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('ping', () => {
    it('should return "PONG!"', () => {
      expect(appController.ping()).toBe('PONG!');
    });
  });
});
