import { CallHandler, ExecutionContext, HttpStatus } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ILogInterceptorService } from './i-log-interceptor.service';

export class LogInterceptorService implements ILogInterceptorService {
  public getRequestAndResponseInfo(
    context: ExecutionContext,
    responseBody: any,
    isError: boolean,
  ): any {
    const response: any = context.switchToHttp().getResponse();
    const request: any = response.req;
    const requestHost: string = request.host;
    const requestClientIP: string = request.ip;
    const requestHeaders: any = request.rawHeaders;
    const requestMethod: string = request.method;
    const requestUrl: string = request.url;
    const requestPath: string = request.path;
    const requestParams: any = request.params;
    const requestQuery: any = request.query;
    const requestBody: any = request.body;
    let responseStatusCode: HttpStatus;
    responseStatusCode = responseBody.status;
    if (!isError) {
      responseStatusCode = response.statusCode;
    }

    const infoObject: any = {
      requestHost,
      requestClientIP,
      requestHeaders,
      requestMethod,
      requestUrl,
      requestPath,
      requestParams,
      requestQuery,
      requestBody,
      responseStatusCode,
      responseBody,
      isError,
    };

    return infoObject;
  }

  public intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    return next.handle().pipe(
      tap(
        (responseBody) => {
          console.log(
            'Interceptor Log',
            this.getRequestAndResponseInfo(context, responseBody, false),
          );
        },
        (error) => {
          console.error(
            'Interceptor Log',
            this.getRequestAndResponseInfo(context, error, true),
          );
        },
      ),
    );
  }
}
