export class BaseServiceResult<T> {
  isSuccess: boolean;
  code: number;
  message: string;
  error: string;
  data: T;

  constructor() {
    this.isSuccess = false;
    this.message = 'Something Wrong! I can feel it! Just feel it!';
  }

  setOKResult(message: string, data: T): void {
    this.isSuccess = true;
    this.message = message;
    this.data = data;
    this.code = 200;
  }

  setCreatedResult(message: string, data: T): void {
    this.isSuccess = true;
    this.message = message;
    this.data = data;
    this.code = 201;
  }

  setInternalServerResult(message: string, error?: string): void {
    this.isSuccess = false;
    this.message = message;
    this.error = error;
    this.code = 500;
  }

  setBadRequestResult(message: string, error?: string): void {
    this.isSuccess = false;
    this.message = message;
    this.error = error;
    this.code = 400;
  }
}
