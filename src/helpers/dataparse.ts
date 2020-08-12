import deparam from 'jquery-deparam';

export default class DataFlagTransformer {
  /**
   * Use to parse string to Typescript Object
   * @param {string[]} input The string array to transform
   * @returns {Object} a ja
   */
  static transform(input: string[]): any {
    const data = input.join('&');
    const obj = deparam(data);
    return obj;
  }
}
