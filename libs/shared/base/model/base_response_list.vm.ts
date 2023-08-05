import { ApiResponseProperty } from '@nestjs/swagger';

import { BaseServiceListDTO } from './base_service_list.dto';

export class BaseResponseListVM<T> {
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
    type: BaseServiceListDTO<T>,
  })
  public data: BaseServiceListDTO<T>;

  constructor() {}

  setResponseBaseServiceListResult(
    baseServiceListResult: BaseServiceListDTO<T>,
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
