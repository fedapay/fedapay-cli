import { flags } from '@oclif/command'
import { FedaPay, Transaction } from 'fedapay'
import * as colorize from 'json-colorizer'
import Transactions from '../transactions'
import { string } from '@oclif/command/lib/flags'

export default class TransactionsDelete extends Transactions {
  static description = 'Delete a transaction'

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

  static args = [{ name: 'file' }]

  async run() {
    const { flags } = this.parse(TransactionsDelete)
    const apiKey = flags['api-key']
    const environment = flags.environment
    FedaPay.setApiKey(apiKey)
    FedaPay.setEnvironment(environment)
    const transaction_id = flags.transaction_id
    this.log(transaction_id)

    try {
      const transaction = await Transaction.retrieve(transaction_id)
      if (transaction) {
        try {
          await transaction.delete
          this.log('transaction deleted')
        } catch (error) {
          this.log(error)

        }


      }
    } catch (error) {
      this.log(error)

    }

  }


}


