import {flags} from '@oclif/command'
import {FedaPay, Customer} from 'fedapay'
import * as colorize from 'json-colorizer'
import Customers from '../customers'

export default class CustomersRetrieve extends Customers {
  static description = 'get customer details'
  static flags = {
    ...Customers.flags,
    id: flags.integer({
      description: 'retrieve details of the customer with this id',
      required: true,
    }),
    help: flags.help({char: 'h'}),
  }

  static examples = [
    'customers:retrieve --id=5',
    'customers:retrieve --id=1',
  ]

  async run() {
    const {flags} = this.parse(CustomersRetrieve)
    const apiKey = flags['api-key']
    const environment = flags.environment
    const id = flags.id

    FedaPay.setApiKey(apiKey)
    FedaPay.setEnvironment(environment)
    
    const customers = await Customer.retrieve(id)

    this.log(colorize(JSON.stringify(customers, null, 2)))
  }
}
