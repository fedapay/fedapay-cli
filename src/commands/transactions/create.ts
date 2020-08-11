import { flags } from '@oclif/command'
import { FedaPay, Transaction } from 'fedapay'
import * as colorize from 'json-colorizer'
import chalk = require('chalk')
import Transactions from '../transactions'
import DataFlagtransformer from '../../helpers/dataparse'
/*
TransactionCreate Class extending the superClass Transactions
*/
export default class TransactionsCreate extends Transactions {
  /** 
   * @params String 
   * Description of the command transactions:create
   */
  static description = 'Create a Transaction'
  /**
   * @params Object
   * Insertion of the different commands flags
   */
  static flags = {
    ...Transactions.flags,
    help: flags.help({ char: 'h' }),
    data: flags.string({
      char: 'd',
      description: 'provide all the intel of your transactions',
      required: true,
      multiple: true,
    }),
    with_token: flags.boolean({
      description: 'add the token to your transactions',
      default: false,
    }),
    force: flags.boolean({ char: 'f' }),
  }
  /**
   * @param Sting[]
   * Some example of use of the transaction:create command
   */
  static examples = [
    'transactions:create --api-key=[api_key] --environment=environment -d amount=2500, -d description=Sending money to mum -d currency[iso]=XOF, -d customer[email]=geronimo@apache.com',
    'transactions:create --api-key=[api_key] --environment=environment --with_token -d amount=2500, -d description=Sending money to mum -d currency[iso]=XOF, -d customer[email]=geronimo@apache.com'
  ]
  async run() {
    /**
     * @param object
     * get flags value 
     */
    const { flags } = this.parse(TransactionsCreate)
    /** 
    * @param String 
    * your api's key  
    */
    const apiKey = flags['api-key']
    /**
     * @param String
     * sandbox or live
     */
    const environment = flags.environment
    /**
     * @param Object
     * The data obtained after transformation
     */
    const data = DataFlagtransformer.Transform(flags.data)
    /**
     * Set Apikey and environment to connect to fedapay
     */
    FedaPay.setApiKey(apiKey)
    FedaPay.setEnvironment(environment)
    try {
      /**
       * @param Transaction
       * Created transaction
       */
      const transaction = await Transaction.create(data)
      this.log(chalk.green('Transaction created successfully!'))
      this.log(colorize(JSON.stringify(transaction, null, 2)))
      if (flags.with_token) {
        /**
         * @param Object
         * Your token
         */
        const token = await transaction.generateToken();
        this.log('Your url token is : ' + token.url)
      }
    } catch (error) {
      this.log('Oups something occured')
      this.error(error.message)
    }
  }
}
