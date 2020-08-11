import { flags } from '@oclif/command'
import { FedaPay, Transaction } from 'fedapay'
import * as colorize from 'json-colorizer'
import cli from 'cli-ux'
import Transactions from '../transactions'
import DataFlagtransformer from '../../helpers/dataparse'
/**
 * TransactionUpdate extending the superClass Transactions
 */
export default class TransactionsUpdate extends Transactions {
  /** 
  * @params String 
  * Description of the command transactions:update
  */
  static description = 'Update some transactions'
  /**
   * @param object
   * Declaration of the command flags
  */
  static flags = {
    ...Transactions.flags,
    id: flags.integer({
      required: true,
      description: 'Provide the id of the transaction you want to update'
    }),
    data: flags.string({
      description: 'Provide the data you want to update',
      required: true,
      multiple: true,
      char: 'd',
    }),
    confirm: flags.boolean({
      description: 'Update your data',
      default: false,
    }),
    help: flags.help({ char: 'h' }),
  }
  /**
 * @param Sting[]
 * Some example of use of the transaction:update command
 */
  static examples = [
    'transactions:update --api-key=[api_key] --environment=sandbox --id=12321 -d amount=2500, -d description=Sending money to mum -d currency[iso]=XOF',
    'transactions:update --api-key=[api_key] --environment=sandbox --id=52123 -d amount=1780, -d customer[email]=geronimo@apache.com --confirm'
  ]
  async run() {
    /**
 * @param object
 * get flags value 
 */
    const { flags } = this.parse(TransactionsUpdate)
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
 * Set Apikey and environment to connect to fedapay
 */
    FedaPay.setApiKey(apiKey)
    FedaPay.setEnvironment(environment)
    try {
      /**
      * @param integer
      * get the id of the transaction
      */
      const id = flags.id
      /**
      * @param Object
      * The data obtained after transformation
      */
      const data = DataFlagtransformer.Transform(flags.data)
      /**
       * @param Boolean
       * true if either the confirm flag or the confirm dialog is setted
       */
      const confirm = flags.confirm || await cli.confirm("Sure to continue?")
      if (confirm) {
        /**
         * @param Transaction
         * When we got a match the variable is filled up with a transaction object
         */
        const transaction = await Transaction.retrieve(id)
        const transaction_update = await Transaction.update(id, data)
        this.log(colorize(JSON.stringify(transaction_update, null, 2)))
      } else {
        this.log('Update dropped')
      }
    } catch (error) {
      this.error(error)
    }
  }
}
