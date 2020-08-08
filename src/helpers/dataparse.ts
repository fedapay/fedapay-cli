import * as queryString from 'query-string'
import { greenBright } from 'chalk'


export default class DataParse {
    

    static Dparse(params: string[]): Object{

        const data = params.join('&')
        const obj = queryString.parse(data)
        if (obj.phone_number) {
            const d = obj.phone_number.split(",")
            const phone_number = queryString.parse(d.join("&"))
            obj.phone_number = phone_number
          }
        return obj
    };
}
