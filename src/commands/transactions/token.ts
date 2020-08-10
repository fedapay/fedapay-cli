import { flags } from '@oclif/command'
import { FedaPay, Transaction } from 'fedapay'
import * as colorize from 'json-colorizer'
import Transactions from '../transactions'
import { string } from '@oclif/command/lib/flags'
import chalk = require('chalk')

export default class TransactionsToken extends Transactions {
  static description = 'Add a token to a transaction'

  static flags = {
    ...Transactions.flags,
    transaction_id: flags.integer({
      required: true,
      description: 'Provide the id of the transaction you want to tokenize'
    }),

    help: flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: 'n', description: 'name to print' }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: 'f' }),
  }

  static args = [{ name: 'file' }]

  async run() {
    const { flags } = this.parse(TransactionsToken)
    //for setting the secret api-key and the environment 'live' or 'sandbox'
    const apiKey = flags['api-key']
    const environment = flags.environment
    FedaPay.setApiKey(apiKey)
    FedaPay.setEnvironment(environment)

    //Get the transaction's id thanks to the flag

    const transaction_id = flags.transaction_id
    try {
      const transaction = await Transaction.retrieve(transaction_id)
      const token = await transaction.generateToken();
      this.log(chalk.green('Your url token is :') + chalk.underline(token.url))
    } catch (error) {
      this.log(chalk.red(error))
    }
  }
}

