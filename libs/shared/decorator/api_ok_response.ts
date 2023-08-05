import { applyDecorators, Type } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';

import { BaseResponseListVM } from '../base/model/base_response_list.vm';
import { BaseResponseVM } from '../base/model/base_response.vm';
import { BaseServiceListDTO } from '../base/model/base_service_list.dto';

export const ApiOkListResponse = <DataDto extends Type<unknown>>(
  dataDto: DataDto,
) =>
  applyDecorators(
    ApiExtraModels(BaseResponseListVM, BaseServiceListDTO),
    ApiExtraModels(BaseServiceListDTO, dataDto),
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(BaseResponseListVM) },
          {
            properties: {
              data: {
                $ref: getSchemaPath(BaseServiceListDTO),
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
    ApiExtraModels(BaseResponseVM, dataDto),
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(BaseResponseVM) },
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
