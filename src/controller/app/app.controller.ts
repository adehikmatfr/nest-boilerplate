import { Controller, Inject, Get } from '@nestjs/common';

import { AppService } from '../../service/app/app.service';

@Controller()
export class AppController {
  constructor(@Inject('IAppService') protected appService: AppService) {}

  @Get('ping')
  ping(): string {
    return this.appService.ping();
  }
}
