import { Test, TestingModule } from '@nestjs/testing';

import { AppService } from '../../service/app/app.service';
import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: 'IAppService',
          useClass: AppService,
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
