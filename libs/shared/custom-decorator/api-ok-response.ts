import { applyDecorators, Type } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';

import { BaseResponse } from '../base-model/base-response';
import { BaseResponseList } from '../base-model/base-response-list';
import { BaseServiceListResult } from '../base-model/base-service-list-result';

export const ApiOkListResponse = <DataDto extends Type<unknown>>(
  dataDto: DataDto,
) =>
  applyDecorators(
    ApiExtraModels(BaseResponseList, BaseServiceListResult),
    ApiExtraModels(BaseServiceListResult, dataDto),
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(BaseResponseList) },
          {
            properties: {
              data: {
                $ref: getSchemaPath(BaseServiceListResult),
                properties: {
                  list: {
                    type: 'array',
                    items: { $ref: getSchemaPath(dataDto) },
                  },
                },
              },
            },
          },
        ],
      },
    }),
  );

export const ApiOkSingleResponse = <DataDto extends Type<unknown>>(
  dataDto: DataDto,
) =>
  applyDecorators(
    ApiExtraModels(BaseResponse, dataDto),
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(BaseResponse) },
          {
            properties: {
              data: {
                $ref: getSchemaPath(dataDto),
              },
            },
          },
        ],
      },
    }),
  );
