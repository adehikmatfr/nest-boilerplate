import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { EnvConfig } from '@shared/config/env_config';
import { LogInterceptorService } from '@shared/logger/log_interceptor.service';
import * as bodyParser from 'body-parser';

import { ModelValidatorPipe } from '../libs/shared/pipe/model_validator.pipe';
import { AppModule } from './module/app.module';

export async function config() {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const path = require('path');
  EnvConfig.registerConfigDir(
    path.resolve(path.join(__dirname, 'asset/config')),
  );
}

export async function run() {
  let app: INestApplication & NestExpressApplication;
  if (process.env.NODE_ENV === 'test') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { Test } = require('@nestjs/testing');
    app = (
      await Test.createTestingModule({
        imports: [AppModule],
      }).compile()
    ).createNestApplication();
  } else {
    app = await NestFactory.create(AppModule);
  }

  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  app.enableCors();

  const logInterceptorService: LogInterceptorService = app.get(
    'LogInterceptorService',
  );
  const modelValidatorPipe: ModelValidatorPipe = app.get('ModelValidatorPipe');
  app.useGlobalInterceptors(logInterceptorService);
  app.useGlobalPipes(modelValidatorPipe);

  app.setGlobalPrefix('api');

  if (process.env.NODE_ENV != 'production') {
    const options = new DocumentBuilder()
      .setTitle('Swagger API')
      .setDescription('Main API')
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('docs', app, document);
  }

  if (process.env.NODE_ENV === 'test') {
    await app.init();
  } else {
    const port = process.env.PORT || 3002;
    const server = await app.listen(port, () => {
      console.log(`===== Server listening on port ${port} =====`);
    });
    server.keepAliveTimeout = 1000 * 60 * 5; // 5 minutes
    server.timeout = 1000 * 60 * 10; // 10 minutes
  }
}
