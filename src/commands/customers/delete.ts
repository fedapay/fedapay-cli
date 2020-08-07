import {flags} from '@oclif/command'
import {FedaPay, Customer} from 'fedapay'
import * as colorize from 'json-colorizer'
import Customers from '../customers'
import cli from 'cli-ux'

export default class CustomersDelete extends Customers {
  static description = 'delete an customer'

  static flags = {
    ...Customers.flags,
    id: flags.integer({
      description: 'the id of the customer to update',
      required:true
    }),
    confirm: flags.boolean({
      description: 'confirm the delete',
      default: false
    }),
    help: flags.help({char: 'h'}),
  }

  static examples = [
    'customers:delete --id=4856',
    'customers:delete --id=4856 --confirm',
  ]

  async run() {
    const {flags} = this.parse(CustomersDelete)
    const apiKey = flags['api-key']
    const environment = flags.environment
    const id = flags.id
    const confirm = flags.confirm

    FedaPay.setApiKey(apiKey)
    FedaPay.setEnvironment(environment)

    if(confirm){
      const customers = await Customer.delete(id)
      this.log(colorize(JSON.stringify(customers, null, 2)))
    }
    else{

      const confirmPrompt = await cli.confirm('Would you like to continue? [Y/n]')
      if(confirmPrompt){
        const customers = await Customer.delete(id)
        this.log(colorize(JSON.stringify(customers, null, 2)))
      }
      else {
        this.warn('Delete canceled')
        this.exit
      }
    }
  }
}
