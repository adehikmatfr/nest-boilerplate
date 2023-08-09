import { plainToClass } from 'class-transformer';

export abstract class BaseModelDTO {
  mapToVM<T>(vmClass: new () => T): T {
    return plainToClass(vmClass, this);
  }
}
