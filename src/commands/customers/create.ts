import {flags} from '@oclif/command'
import {FedaPay, Customer} from 'fedapay'
import * as colorize from 'json-colorizer'
import Customers from '../customers'
import * as chalk from 'chalk'
import DataFlagtransformer from '../../helpers/dataparse'
/**
 * CustomersCreate class extending the superClass Customers
 */
export default class CustomersCreate extends Customers {
  /**
   * @param string
   * Description of the command Customer:create
  */
  static description = 'Create a new customer'
  /**
   * @param object
   * Declaration of the command flags
  */
  static flags = {
    ...Customers.flags,
    data: flags.string({
      description: 'Json Data of the customer',
      required: true,
      char: 'd',
      multiple: true,
    }),
    help: flags.help({
      char: 'h',
      description: 'show the help about the command customers:create'
    }),
  }
  /**
   * @param string
   * Set the command usage for help
   */
  static usage = '$ fedapay customers:create [options]'
  /**
   * @param string[]
   * some examples of the custommers create use for help
   */
  static examples = [
    'fedapay customers:create --api-key=[api_key] --environment=sandbox -d firstname=DOS -d lastname=Yovo -d email=customertest1@tom.com -d phone_number[number]=68452896 -d phone_number[country]=BJ'
  ]
  async run() {
    /**
     * @param object
     * get flags value
     */
    const {flags} = this.parse(CustomersCreate)
    /**
     * @param string
     * api key value
     */
    const apiKey = flags['api-key']
    /**
     * @param string
     * environment type
     */
    const environment = flags.environment
    /**
     * @param object
     * result of transforming flags.data into Typescript Object
     */
    const data= DataFlagtransformer.transform(flags.data)
    /**
     * Set Apikey and environment to connect to fedapay
     */
    FedaPay.setApiKey(apiKey)
    FedaPay.setEnvironment(environment)
    try {
      const customer = await Customer.create(data)
      this.log(chalk.greenBright(`Customer created successfully`))
      this.log(colorize(JSON.stringify(customer, null, 2)))
    } catch (error ) {
      this.warn(chalk.red(`${error.name} : ${error.message}`))
      this.exit
    }
  }
}
