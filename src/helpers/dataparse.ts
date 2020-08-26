
import deparam from 'jquery-deparam';
import param from 'jquery-param';
import queryString from 'query-string';
import * as fs from 'fs';
import * as path from 'path';
import Config from './user-config';

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

    const filtersString = param({ filters: { includes, compare } });
    return queryString.parse(filtersString);
  }

  static transformFilterForES(inputs: string | string[]) {
    const filtersTransform = DataFlagTransformer.transform(inputs);
    const filters: any = {};
    for (const n in filtersTransform) {
      if (n === 'type' || n === 'object_id' || n === 'object' || n === 'entity') {
        filters[`filters[${n}]`] = filtersTransform[n];
      }
    }

    const filtersString = param(filters);
    return queryString.parse(filtersString);
  }
}
