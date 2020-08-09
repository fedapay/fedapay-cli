import { flags } from '@oclif/command'
import { FedaPay, Transaction } from 'fedapay'
import * as colorize from 'json-colorizer'
import Transactions from '../transactions'
import { string } from '@oclif/command/lib/flags'
import cli from 'cli-ux'


export default class TransactionsUpdate extends Transactions {
  static description = 'Update some transactions'

  static flags = {
    ...Transactions.flags,
    transaction_id: flags.integer({
      required: true,
      description: 'Provide the id of the transaction you want to update'
    }),
    data: flags.string({
      description: 'Provide the data you want to update',
      required: true,

    }),
    help: flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)
    confirm: flags.boolean({
      description: 'Update your data',
      default: false,

    })

  }

  static args = [{ name: 'file' }]

  async run() {
    const { flags } = this.parse(TransactionsUpdate)
    const apiKey = flags['api-key']
    const environment = flags.environment
    FedaPay.setApiKey(apiKey)
    FedaPay.setEnvironment(environment)
    try {
      const transaction_id = flags.transaction_id
      const data = JSON.parse(flags.data)

      if (flags.confirm) {

        try {
          const transaction = await Transaction.retrieve(transaction_id)

          const transaction_update = await Transaction.update(transaction_id, data)
          this.log(colorize(JSON.stringify(transaction_update, null, 2)))

        } catch (error) {
          this.log(error)
        }

      } else {
        try {
          const confirm = await cli.confirm("Sure to continue?")
          if (confirm) {
            const transaction = await Transaction.update(data)
            this.log(colorize(JSON.stringify(transaction, null, 2)))

          }
          else { this.log('Update dropped') }
        }
        catch (error) {
          this.log(error)
        }

      }
    } catch (error) {
      this.log(error)
    }

  }
}
