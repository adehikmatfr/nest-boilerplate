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

  constructor() {}

  public setDataAndCount(list: T[], total: number): void {
    this.list = list;
    this.total = total;
  }
}
