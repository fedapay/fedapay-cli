import {flags} from '@oclif/command'
import {FedaPay, Customer} from 'fedapay'
import * as colorize from 'json-colorizer'
import Customers from '../customers'
import cli from 'cli-ux'
import * as chalk from 'chalk'
import * as queryString from 'query-string'
import { Console } from 'console'
import DataFlagtransformer from '../../helpers/dataparse';
export default class CustomersCreate extends Customers {
  static description = 'Create a customer'

  static flags = {
    ...Customers.flags,
    data: flags.string({
      description: 'Json Data of the customer',
      required: true,
      char: 'd',
      multiple: true,
      //parse: input => DataParse.Dparse(input),      
    }),
    help: flags.help({char: 'h'}),
  }

  static examples = [
    'customers:create --data={\"firstname\":\"GOUSSANOU\",\"lastname\":\"Pethuel\",\"email\":\"pethou@gmail.com\"}',
    'customers:create --api-key=sk_sandbox_6mHuOmKl5H9gbapBFdscGbpI --environment=sandbox --data={\"firstname\":\"GNANSOU\",\"lastname\":\"Adon\",\"email\":\"gnanadon@gmail.com\",\"phone_number\":{\"number\":\"98784598\",\"country\":\"BJ\"}}'
  ]

  async run() {
    const {flags} = this.parse(CustomersCreate)
    const apiKey = flags['api-key']
    const environment = flags.environment
    const data= DataFlagtransformer.Transform(flags.data)
    
    FedaPay.setApiKey(apiKey)
    FedaPay.setEnvironment(environment)

        try {
          const customers = await Customer.create(data)
          this.warn(chalk.greenBright(`Customer created successfully`))
          this.log(colorize(JSON.stringify(customers, null, 2))) 
        } catch (error ) {
          this.warn(chalk.red(`${error.name} : ${error.message}`)) // Good way to catch errors
          this.exit
        }
    

  }
}
