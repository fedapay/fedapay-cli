import { flags } from '@oclif/command'
import { FedaPay, Transaction } from 'fedapay'
import * as colorize from 'json-colorizer'
import { string } from '@oclif/command/lib/flags'
import chalk = require('chalk')
import Transactions from '../transactions'
/**
 * TransactionRetrieve class extending super Class Transactions
 */
export default class TransactionsRetrieve extends Transactions {
  /** 
  * @params String 
  * Description of the command transactions:retrieve
  */
  static description = 'retrieve the id of a transaction'
  /**
  * @param object
  * Declaration of the command flags
 */
  static flags = {
    ...Transactions.flags,
    id: flags.integer({
      required: true,
      description: 'Provide the id of the transaction you want to retrieve'
    }),
    help: flags.help({ char: 'h' }),
  }
  /**
   * @param String 
   * Some example with the retrieve command
   */
  static examples = [
    'transactions:retrieve --api-key=[api_key] --environment=sandbox --id=12321',
  ]
  async run() {
    /**
      * @param object
      * get flags value 
      */
    const { flags } = this.parse(TransactionsRetrieve)
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
    /**
     * @param integer
     * get the id of the transaction
     */
    const transaction_id = flags.id
    try {
      /**
      * @param Transaction
      * When we got a match the variable is filled up with a transaction object
      */
      const transaction = await Transaction.retrieve(transaction_id)
      this.log(chalk.red('We got a match!'))
      this.log(colorize(JSON.stringify(transaction, null, 2)))
    } catch (error) {
      this.error(error)
    }
  }
}

