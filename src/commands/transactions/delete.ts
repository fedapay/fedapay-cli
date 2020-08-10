import { flags } from '@oclif/command'
import { FedaPay, Transaction } from 'fedapay'
import * as colorize from 'json-colorizer'
import Transactions from '../transactions'
import { string } from '@oclif/command/lib/flags'
import cli from 'cli-ux'
import chalk = require('chalk')
export default class TransactionsDelete extends Transactions {
  static description = 'Delete a transaction'
  //First thing we create the flags we want to use
  static flags = {
    ...Transactions.flags,
    transaction_id: flags.integer({
      description: 'Provide the id of the transaction you want to delete',
      required: true,
    }),
    confirm: flags.boolean({
      description: 'Bypass the confirmation',
      default: false,
    }),

    help: flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)

  }



  async run() {

    const { flags } = this.parse(TransactionsDelete)

    //for setting the secret api-key and the environment 'live' or 'sandbox'
    const apiKey = flags['api-key']
    const environment = flags.environment
    FedaPay.setApiKey(apiKey)
    FedaPay.setEnvironment(environment)

    //Get the transaction's id thanks to the flag

    const transaction_id = flags.transaction_id
    try {
      //Retrieve the transaction you want to delete
      const transaction = await Transaction.retrieve(transaction_id)
      if (transaction) {
        try {
          //Only pending or canceled transaction can't be delete so first check the status of the transaction 
          if (transaction.status == 'pending' || transaction.status == 'canceled') {
            if (flags.confirm) {
              await transaction.delete()
              this.log(chalk.blue('transaction deleted'))
            } else {
              const confirm = await cli.confirm('Sure to continue? Yes or No')
              
              if (confirm) {
                await transaction.delete()
                this.log(chalk.yellow('transaction deleted'))
              } else {
                this.log(chalk.red('deletion canceled'))
              }

            }
           
          } else {
            this.log(chalk.red('the transaction can\'t be deleted'))
          }

        } catch (error) {
          this.log(error)

        }


      }
    } catch (error) {
      this.log(error)

    }

  }


}


