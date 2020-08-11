import { flags } from '@oclif/command'
import { FedaPay, Transaction } from 'fedapay'
import * as colorize from 'json-colorizer'
import { string } from '@oclif/command/lib/flags'
import cli from 'cli-ux'
import chalk = require('chalk')
import Transactions from '../transactions'
/**
 * TransactionDelete class extending super class Transactions
 */
export default class TransactionsDelete extends Transactions {
   /** 
   * @params String 
   * Description of the command transactions:delete
   */
  static description = 'Delete a transaction'
  
   /**
   * @param object
   * Declaration of the command flags
  */ 
  static flags = {
    ...Transactions.flags,
    id: flags.integer({
      description: 'Provide the id of the transaction you want to delete',
      required: true,
    }),
    confirm: flags.boolean({
      description: 'Bypass the confirmation',
      default: false,
    }),
    help: flags.help({ char: 'h' }),
  }
/**
 * @param String[]
 * Some example of use of the delete command 
 */
static examples = [
  'transactions:delete --api-key=[api_key] --environment=environment --id=12321',
  'transactions:delete --api-key=[api_key] --environment=environment --id=12321 --confirm',
]
  async run() {
        /**
     * @param object
     * get flags value 
     */
    const { flags } = this.parse(TransactionsDelete)
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
       * result of the retrieve
       */
      const transaction = await Transaction.retrieve(id)
      if (transaction) {
         /**
       * @param Boolean
       * true if either the confirm flag or the confirm dialog is setted
       */
        const confirm = flags.confirm || await cli.confirm('Sure to continue? Yes or No')
        if (confirm) {
          await transaction.delete()
          this.log(chalk.blue('transaction deleted'))
        } else {
          this.log(chalk.red('deletion canceled'))
        }
      }
    } catch (error) {
      this.error(error)
    }
  }'transactions:token'

