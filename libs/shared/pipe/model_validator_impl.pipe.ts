import { ArgumentMetadata, HttpException, HttpStatus } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validateSync, ValidationError } from 'class-validator';

import { BaseResponseVM } from '../base/model/base_response.vm';
import { ModelValidatorPipe } from './model_validator.pipe';

export class ModelValidatorPipeImpl implements ModelValidatorPipe {
  public validateModel(value: any, metadata: ArgumentMetadata): any {
    if (metadata.metatype && metadata.type !== 'param') {
      value = plainToClass(metadata.metatype, value);

      const error = this.validateObject(value);

      if (error != '') {
        const response: BaseResponseVM<any> = new BaseResponseVM<any>();
        response.setResponse(
          HttpStatus.BAD_REQUEST,
          'INVALID_REQUEST_DATA',
          error,
        );

        throw new HttpException(response, HttpStatus.BAD_REQUEST);
      }
    }

    return value;
  }

  public transform(value: any, metadata: ArgumentMetadata): any {
    return this.validateModel(value, metadata);
  }

  private getErrorFromValidationErrors(
    validationErrors: ValidationError[],
  ): string {
    if (validationErrors) {
      if (validationErrors.length) {
        for (const validationError of validationErrors) {
          if (validationError.constraints) {
            const values = Object.values(validationError.constraints);
            for (const value of values) {
              return value;
            }
          } else {
            this.getErrorFromValidationErrors(validationError.children);
          }
        }
      }
    }
    return '';
  }

  private validateObject(objectToValidate: any): string {
    const validationErrors: ValidationError[] = validateSync(objectToValidate);
    return this.getErrorFromValidationErrors(validationErrors);
  }
}
