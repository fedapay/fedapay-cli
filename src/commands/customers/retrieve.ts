import {flags} from '@oclif/command'
import {FedaPay, Customer} from 'fedapay'
import * as colorize from 'json-colorizer'
import Customers from '../customers'
import * as chalk from 'chalk'
/**
 * CustomersRetrieve class extending the superClass Customers
 */
export default class CustomersRetrieve extends Customers {
  /**
   * @param string
   * Description of the command Customer:retrieve
  */
  static description = 'Get customer details'
  /**
   * @param object
   * Declaration of the command flags
  */ 
  static flags = {
    ...Customers.flags,
    id: flags.integer({
      description: 'Retrieve details of the customer with this id',
      required: true,
    }),
    help: flags.help({
      char: 'h',
      description: 'show the help about the command customers:retrieve'
    }),
  }
 /**
   * @param string[]
   * some examples of the custommers retrieve use for help
   */
  static examples = [
    'customers:retrieve --api-key=[API_KEY] --environment=sandbox --id=5',
    'customers:retrieve --api-key=[API_KEY] --environment=sandbox --id=1',
  ]
  async run() {
    /**
      *  Get flags object from CustommersRetrieve
      *  and use them to retrieve an custommer
    /**
     * @param object
     * get flags value 
     */
    const {flags} = this.parse(CustomersRetrieve)
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
     * @param number
     * store the customer id 
     */
    const id = flags.id
    /**
     * Set Apikey and environment to connect to fedapay
     */
    FedaPay.setApiKey(apiKey)
    FedaPay.setEnvironment(environment)
    try {
    const customer = await Customer.retrieve(id)
    this.log(colorize(JSON.stringify(customer, null, 2)))
    }
    catch(error){
      this.warn(chalk.red(`${error.name} : ${error.message}`))
      this.exit
    }
  }
}
