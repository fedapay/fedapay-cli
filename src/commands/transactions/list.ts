import {flags} from '@oclif/command'
import {FedaPay, Transaction} from 'fedapay'
import * as colorize from 'json-colorizer'
import Transactions from '../transactions'

export default class TransactionsList extends Transactions {
  static description = 'List of the transactions ressources'

  static flags = {
    ...Transactions.flags,
    limit: flags.integer({
      description: 'define a limit per result',
      default: 2,
    }),
    page: flags.integer({
      description: 'display the result by page number',
      default: 1,
    }),
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
  }

  static args = [{name: 'file'}]

  async run() {
    const {flags} = this.parse(TransactionsList)
    const apiKey = flags['api-key']
    const environment = flags.environment
    const limit = flags.limit
    const page = flags.page
    FedaPay.setApiKey(apiKey)
    FedaPay.setEnvironment(environment)

    const transactions = await Transaction.all({per_page: limit, page: page})
    this.log(colorize(JSON.stringify(transactions, null, 2)))
  }
}

