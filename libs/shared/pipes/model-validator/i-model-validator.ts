import { ArgumentMetadata, PipeTransform } from '@nestjs/common';

export interface IModelValidatorPipe extends PipeTransform<any, any> {
  validateModel(value: any, metadata: ArgumentMetadata): any;
}
