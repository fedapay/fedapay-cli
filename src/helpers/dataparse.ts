import * as deparam from 'jquery-deparam'


export default class DataFlagTransformer {
    /*Use to parse string to Typescript Object */

    /**
     * @param {string[]} input The string array to transform
     * @returns {Object} a ja
     */
    static Transform(input: string[]): Object{
        
        const data = input.join('&')
        const obj = deparam(data)
        return obj
    };
}
