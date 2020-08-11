import {flags} from '@oclif/command'
import {FedaPay, Customer} from 'fedapay'
import * as colorize from 'json-colorizer'
import Customers from '../customers'
import cli from 'cli-ux'
import * as chalk from 'chalk'
import DataFlagtransformer from '../../helpers/dataparse'
/**
 * CustomersUpdate class extending the superClass Customers
 */
export default class CustomersUpdate extends Customers {
  /** 
   * @param string
   * Description of the command Custommers:update description
   */
  static description = 'Udapde an customer informations'
  /**
   * @param object
   * Declaration of the command flags
  */ 
  static flags = {
    ...Customers.flags,
    id: flags.integer({
      description: 'The id of the customer to update',
      required:true,
    }),
    data: flags.string({
      description: 'The new data for the update',
      required: true,
      char: 'd',
      multiple: true, 
    }),
    confirm: flags.boolean({
      description: 'Confirm the update',
      default: false
    }),
    help: flags.help({
      char: 'h',
      description: 'show help about the command customers:update'
      
  }),
  }
  /**
   * @param string[]
   * some examples of the custommers update use for help
   */
  static examples = [
    'customers:update --api-key=[API_KEY] --environment=sandbox --id=2047 -d email=johndoe@zot.com',
    'customers:update --api-key=[API_KEY] --environment=sandbox --id=2047 -d email=johndoe@zot.com -d lastname=Doe --confirm',
  ]
  async run() {

    /**
      *  Get flags object from CustommersUpdate 
      *  and use them to update the custommer 
      */
    /**
     * @param object
     * get flags value 
     */
    const {flags} = this.parse(CustomersUpdate)
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
     * @param object
     * result of transforming flags.data into Typescript Object
     */ 
    const data= DataFlagtransformer.transform(flags.data)
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
          const customer = await Customer.update(id,data)
          this.log(chalk.greenBright(`Customer ${id} updated successfully`))
          this.log(colorize(JSON.stringify(customer, null, 2))) 
        } catch (error) {
          this.error(chalk.red(`${error.name} : ${error.message}`))
        }
      }
      else {
        this.warn('Update canceled')
        this.exit
      }
  }
}

