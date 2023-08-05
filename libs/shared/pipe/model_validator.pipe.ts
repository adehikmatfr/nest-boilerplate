import { ArgumentMetadata, PipeTransform } from '@nestjs/common';

export interface ModelValidatorPipe extends PipeTransform<any, any> {
  validateModel(value: any, metadata: ArgumentMetadata): any;
}
