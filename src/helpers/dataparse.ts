import deparam from 'jquery-deparam';
import param from 'jquery-param';
import queryString from 'query-string';
export default class DataFlagTransformer {
  /**
   * Use to parse string to Typescript Object
   * @param {string|string[]} inputs The string array to transform
   * @returns {Object} a ja
   */
  static transform(inputs: string | string[]): any {
    if (!Array.isArray(inputs)) {
      inputs = [inputs];
    }

    const data = inputs.join('&');
    const obj = deparam(data);
    return obj;
  }

  static transformFilters(inputs: string | string[]) {
    const filters = DataFlagTransformer.transform(inputs);
    const includes: any = {};
    const compare: any = {};

    for (const n in filters) {
      if (typeof filters[n] === 'object') {
        includes[n] = filters[n];
      } else {
        compare[n] = { op: '=', value: filters[n] };
      }
    }

    const filtersString =  param({filters: { includes, compare } });
    return queryString.parse(filtersString);
  }

  static transformFiltersForES(inputs: string | string[]) {
    const filters = DataFlagTransformer.transform(inputs);
    const filtersObject: any = {};

    for (const n in filters) {
      if (typeof filters[n] !== 'object') {
        const key = `filters[${n}]`;
        filtersObject[key] = filters[n];
      } else {
        const error = 'Invalid input. Check --help to see an exampple';
        return error;
      }
    }

    const filtersString =  param(filtersObject);
    return queryString.parse(filtersString);
  }
}
