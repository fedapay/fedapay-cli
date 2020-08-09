import { flags } from '@oclif/command'
import { FedaPay, Transaction } from 'fedapay'
import * as colorize from 'json-colorizer'
import Transactions from '../transactions'
import { string } from '@oclif/command/lib/flags'
import chalk = require('chalk')
export default class TransactionsRetrieve extends Transactions {
  static description = 'retrieve the id of a transaction'

  static flags = {
    ...Transactions.flags,
    transaction_id: flags.integer({
      required: true,
      description: 'Provide the id of the transaction you want to retrieve'
    }),

    help: flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)

  }

  static args = [{ name: 'file' }]

  async run() {
    const {flags} = this.parse(TransactionsRetrieve)
    const apiKey = flags['api-key']
    const environment = flags.environment
    FedaPay.setApiKey(apiKey)
    FedaPay.setEnvironment(environment)

   
    const transaction_id = flags.transaction_id
    
    try {
      const transaction = await Transaction.retrieve(transaction_id)
      this.log(chalk.blue('We got a match!'))
      this.log(colorize(JSON.stringify(transaction, null, 2)))
    } catch (error) {
      //this.log('Oups check your the id and/or your connec')
     this.log(error)

    }
  }
}

