import { ApiResponseProperty } from '@nestjs/swagger';

import { BaseServiceResult } from './base-service-result';

export class BaseResponse<T> {
  @ApiResponseProperty({
    type: Number,
  })
  code: number;

  @ApiResponseProperty({
    type: String,
  })
  message: string;

  @ApiResponseProperty({
    type: String,
  })
  error: string;

  @ApiResponseProperty()
  data: T;

  constructor() {}

  setResponse(code: number, message: string, error: string, data?: T) {
    this.code = code;
    this.message = message;
    this.error = error;
    if (data) {
      this.data = data;
    }
  }

  setResponseBaseServiceResult(baseServiceResult: BaseServiceResult<T>) {
    this.code = baseServiceResult.code;
    this.message = baseServiceResult.message;
    this.error = baseServiceResult.error;
    this.data = baseServiceResult.data;
  }
}

export class Test {
  @ApiResponseProperty({
    type: Number,
  })
  code: number;
}
