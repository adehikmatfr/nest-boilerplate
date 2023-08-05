import { Injectable } from '@nestjs/common';

import { AppService } from './app.service';

@Injectable()
export class AppServiceImpl implements AppService {
  ping(): string {
    return 'PONG!';
  }
}
