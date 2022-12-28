import { ApiResponseProperty } from '@nestjs/swagger';

import { BaseServiceListResult } from './base-service-list-result';

export class BaseResponseList<T> {
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

  @ApiResponseProperty({
    type: BaseServiceListResult<T>,
  })
  public data: BaseServiceListResult<T>;

  constructor() {}

  setResponseBaseServiceListResult(
    baseServiceListResult: BaseServiceListResult<T>,
  ) {
    if (baseServiceListResult.list.length == 0) {
      this.code = 404;
      this.error = 'data not found';
    } else {
      this.code = 200;
      this.message = `success`;
    }
    this.data = baseServiceListResult;
  }
}
