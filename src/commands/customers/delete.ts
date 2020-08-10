import {flags} from '@oclif/command'
import {FedaPay, Customer} from 'fedapay'
import Customers from '../customers'
import cli from 'cli-ux'
import * as chalk from 'chalk'
/**
 * CustomersDelete class extending the superClass Customers
 */
export default class CustomersDelete extends Customers {
    /**
     * @param string
     * Description of the command Customer:delete
    */
    static description = 'Delete an customer by it\'s id'
    /**
     * @param object
     * Declaration of the command flags
    */ 
    static flags = {
      ...Customers.flags,
      id: flags.integer({
        description: 'The id of the customer to update',
        required:true
      }),
      confirm: flags.boolean({
        description: 'Confirm the delete',
        default: false
      }),
      help: flags.help({char: 'h'}),
    }
    /**
     * @param string[]
     * some examples of the custommers delete use for help
     */
    static examples = [
      'customers:delete --api-key=[API_KEY] --environment=sandbox --id=4856',
      'customers:delete --api-key=[API_KEY] --environment=sandbox --id=4856 --confirm',
    ]
    async run() {
      /**
        *  Get flags object from CustommersDelete 
        *  and use them to retrieve and delete the custommer
        */
      /**
       * @param object
       * get flags value 
       */
      const {flags} = this.parse(CustomersDelete)
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
       * @param boolean
       * true if the user set the --confirm flag
       */
      const confirm = flags.confirm
      /**
       * Set Apikey and environment to connect to fedapay
       */
      FedaPay.setApiKey(apiKey)
      FedaPay.setEnvironment(environment)
      /**
       * @param boolean
       * true if the user set the --confirm flag or input yes in the terminal
       */
      const confirmed = confirm || await cli.confirm('Would you like to continue? [Y/n]')
      if(confirmed){
        try {
            const custom = await Customer.retrieve(id)
            const customers = custom.delete()
            this.warn(chalk.greenBright(`Customer ${id} delected successfully`))
        } catch (error) {
            this.warn(chalk.red(`${error.name} : ${error.message}`))
            this.exit
        }     
      }
      else {
        this.warn(chalk.yellow('Delete canceled'))
        this.exit
      }
    }
}
