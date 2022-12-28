export class FormatStingLib {
  public static format(text: string, ...args: any[]) {
    return text.replace(/{(\d+)}/g, (match, num) => {
      return typeof args[num] !== 'undefined' ? args[num] : match;
    });
  }
}
