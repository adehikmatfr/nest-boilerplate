import { Controller, Get, Inject } from '@nestjs/common';

import { IAppService } from '../../services/app/i-app.service';

@Controller()
export class AppController {
  constructor(@Inject('IAppService') protected appService: IAppService) {}
  
  @Get('ping')
  ping(): string {
    return this.appService.ping();
  }
}
