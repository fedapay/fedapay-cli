import {flags} from '@oclif/command'
import {FedaPay, Customer} from 'fedapay'
import * as colorize from 'json-colorizer'
import Customers from '../customers'

export default class CustomersList extends Customers {
  static description = 'List customers ressource'

  static flags = {
    ...Customers.flags,
    limit: flags.integer({
      char:'l',
      description: 'Limit the list of customers to display',
      default: 25,
    }),
    email: flags.string({
      description: 'filter the list by the customers email',
      default:''
    }),
    page: flags.integer({
      description: 'specify the page to show',
      default: 1
    }),
    help: flags.help({char: 'h'}),
  }

  static examples = [
    'customers:list',
    'customers:list --limit=20',
    'customers:list --email=johndoe@entreprise.com',
    'customers:list --page=2',
  ]

  async run() {
    const {flags} = this.parse(CustomersList)
    const apiKey = flags['api-key']
    const environment = flags.environment
    const limit = flags.limit
    const email = flags.email
    const page = flags.page

    FedaPay.setApiKey(apiKey)
    FedaPay.setEnvironment(environment)

    const customers = await Customer.all({per_page: limit, page: page})

    this.log(colorize(JSON.stringify(customers, null, 2)))
  }
}
