import {flags} from '@oclif/command'
import {FedaPay, Customer} from 'fedapay'
import * as colorize from 'json-colorizer'
import Customers from '../customers'
import * as chalk from 'chalk'
/**
 * CustomersList class extending the superClass Customers
 */
export default class CustomersList extends Customers {
    /** 
     * @param string
     * Description of the command Custommers:list description
     */
    static description = 'List customers ressource'
    /**
     * @param object
     * Declaration of the command flags
    */ 
    static flags = {
      ...Customers.flags,
      limit: flags.integer({
        char:'l',
        description: 'Limit the list of customers to display',
        default: 25,
      }),
      email: flags.string({
        description: 'Filter the list by the customers email',
        default:''
      }),
      page: flags.integer({
        description: 'Specify the page to show',
        default: 1
      }),
      help: flags.help({char: 'h'}),
    }
    /**
     * @param string[]
     * some examples of the custommers list use for help
     */
    static examples = [
      'customers:list',
      'customers:list --api-key=[API_KEY] --environment=sandbox --limit=20',
      'customers:list --api-key=[API_KEY] --environment=sandbox --email=johndoe@entreprise.com',
      'customers:list --api-key=[API_KEY] --environment=sandbox --page=2',
    ]
    async run() {
      /**
        *  Get flags object from CustommersList
        *  and use them to retrieve and list the custommers
        */
      /**
       * @param object
       * get flags value 
       */
      const {flags} = this.parse(CustomersList)
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
       * store the number of customers to display
       */
      const limit = flags.limit
      /**
       * @param string
       * store the customer id to display
       */
      const email = flags.email
      /**
       * @param number
       * store the number of the page to display
       */
      const page = flags.page
      /**
       * Set Apikey and environment to connect to fedapay
       */
      FedaPay.setApiKey(apiKey)
      FedaPay.setEnvironment(environment)
      try {
        const customers = await Customer.all({per_page: limit, page: page }) 
        this.log(colorize(JSON.stringify(customers, null, 2)))
      } catch (error) {
        this.warn(chalk.red(`${error.name} : ${error.message}`))
        this.exit
      }    
    }
}
