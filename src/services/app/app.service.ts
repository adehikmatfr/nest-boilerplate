import { Injectable } from '@nestjs/common';

import { IAppService } from './i-app.service';

@Injectable()
export class AppService implements IAppService {
  ping(): string {
    return 'PONG!';
  }
}
