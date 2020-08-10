import * as deparam from 'jquery-deparam'

/**
 * Helper DataFlagTransformer
 * Use to parse string to Typescript Object
 */
export default class DataFlagTransformer {

    /**
     * @param {string[]} input The string array to transform
     * @returns {Object}
     */
    static Transform(input: string[]): Object{
        
        const data = input.join('&')
        const obj = deparam(data)
        return obj
    };
}
