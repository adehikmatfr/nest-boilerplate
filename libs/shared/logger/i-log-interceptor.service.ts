import { ExecutionContext, NestInterceptor } from '@nestjs/common';

export interface ILogInterceptorService extends NestInterceptor<any> {
  getRequestAndResponseInfo(
    context: ExecutionContext,
    responseBody: any,
    isError: boolean,
  ): any;
}
