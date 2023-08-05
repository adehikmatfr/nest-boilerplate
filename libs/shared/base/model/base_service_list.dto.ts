import { ApiResponseProperty } from '@nestjs/swagger';

export class BaseServiceListDTO<T> {
  @ApiResponseProperty({
    type: [],
  })
  public list: T[];

  @ApiResponseProperty({
    type: Number,
  })
  public total: number;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  public setDataAndCount(list: T[], total: number): void {
    this.list = list;
    this.total = total;
  }
}
