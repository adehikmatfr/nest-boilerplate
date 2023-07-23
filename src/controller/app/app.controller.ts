import { Controller, Inject, Get } from '@nestjs/common';

import { IAppService } from '../../service/app/i-app.service';

@Controller()
export class AppController {
  constructor(@Inject('IAppService') protected appService: IAppService) {}

  @Get('ping')
  ping(): string {
    return this.appService.ping();
  }
}
