import { flags } from '@oclif/command'
import { FedaPay, Transaction } from 'fedapay'
import * as colorize from 'json-colorizer'
import Transactions from '../transactions'
/**
 * TransactionList class extending superClass Transactions
 */
export default class TransactionsList extends Transactions {
   /** 
   * @params String 
   * Description of the command transactions:list
   */
  static description = 'List of the transactions ressources'
    /**
   * @param object
   * Declaration of the command flags
  */ 
  static flags = {
    ...Transactions.flags,
    limit: flags.integer({
      description: 'define a limit per result',
      default: 25,
    }),
    page: flags.integer({
      description: 'display the result by page number',
    }),
    help: flags.help({ char: 'h' }),
  }
  /**
   * @param Sting[]
   * Some example of use of the transaction:list command
   */
  static examples = [
    'transactions:list --api-key=[api_key] --environment=sandbox --limit=15'
  ]
  async run() {
        /**
     * @param object
     * get flags value 
     */
    const { flags } = this.parse(TransactionsList)
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
 * @param integer 
 * get the limit value
 */
    const limit = flags.limit
    /**
     * @param integer
     * get the page number value
     */
    const page = flags.page
    /**
     * Set Apikey and environment to connect to fedapay
     */
    FedaPay.setApiKey(apiKey)
    FedaPay.setEnvironment(environment)
    /**
     * @params {Transactions}
     * gett the transaction list
     */
    const transactions = await Transaction.all({ per_page: limit, page: page })
    this.log(colorize(JSON.stringify(transactions, null, 2)))
  }
}

