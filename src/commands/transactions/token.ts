import { flags } from '@oclif/command'
import { FedaPay, Transaction } from 'fedapay'
import * as colorize from 'json-colorizer'
import chalk = require('chalk')
import Transactions from '../transactions'
/**
 * TransactionToken class extending super class Transactions
 */
export default class TransactionsToken extends Transactions {
   /** 
   * @params String 
   * Description of the command transactions:token
   */
  static description = 'Add a token to a transaction'
   /**
   * @param object
   * Declaration of the command flags
  */ 
  static flags = {
    ...Transactions.flags,
    id: flags.integer({
      required: true,
      description: 'Provide the id of the transaction you want to tokenize'
    }),
    help: flags.help({ char: 'h' }),
  }
  /**
   * @param String[]
   * Some example with the token command
   */
  static examples =[
    'transactions:token --api-key=[api_key] --environment=environment --id=12321',
  ]
    async run() {
     /**
     * @param object
     * get flags value 
     */
    const { flags } = this.parse(TransactionsToken)
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
    const id = flags.id
    try {
       /**
         * @param Transaction
         * When we got a match the variable is filled up with a transaction object
         */
      const transaction = await Transaction.retrieve(id)
      /**
         * @param Object
         * Your token
         */
      const token = await transaction.generateToken();
      this.log(chalk.green('Your url token is :') + chalk.underline(token.url))
    } catch (error) {
      this.log(chalk.red(error))
    }
  }
}

