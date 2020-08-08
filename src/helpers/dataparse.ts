import * as queryString from 'query-string'

export default class DataFlagTransformer {
    

    static Transform(input: string[]): Object{

        const data = input.join('&')
        const obj = queryString.parse(data)
        if (obj.phone_number) {
            const d = obj.phone_number.split(",")
            const phone_number = queryString.parse(d.join("&"))
            obj.phone_number = phone_number
          }
        return obj
    };
}
