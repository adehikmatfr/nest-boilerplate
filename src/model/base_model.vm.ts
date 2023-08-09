export abstract class BaseModelVM {
  dateToString(dateTime: Date): string {
    return dateTime.toISOString();
  }
}
