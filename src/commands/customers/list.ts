import {flags} from '@oclif/command'
import {FedaPay, Customer} from 'fedapay'
import * as colorize from 'json-colorizer'
import Customers from '../customers'

export default class CustomersList extends Customers {
  static description = 'List customers ressource'

  static flags = {
    ...Customers.flags,
    limit: flags.integer({
      description: 'Limit the list of customers to display',
      default: 10,
    }),
    help: flags.help({char: 'h'}),
  }

  static examples = [
    'customers:list',
    'customers:list --limit=20',
  ]

  async run() {
    const {flags} = this.parse(CustomersList)
    const apiKey = flags['api-key']
    const environment = flags.environment
    const limit = flags.limit

    FedaPay.setApiKey(apiKey)
    FedaPay.setEnvironment(environment)

    const customers = await Customer.all({per_page: limit})

    this.log(colorize(JSON.stringify(customers, null, 2)))
  }
}
