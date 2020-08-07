import {flags} from '@oclif/command'
import {FedaPay, Customer} from 'fedapay'
import * as colorize from 'json-colorizer'
import Customers from '../customers'
import cli from 'cli-ux'

export default class CustomersUpdate extends Customers {
  static description = 'List customers ressource'

  static flags = {
    ...Customers.flags,
    id: flags.integer({
      description: 'the id of the client to update',
      required:true
    }),
    data: flags.string({
      description: 'The new data for the update',
      required: true
    }),
    confirm: flags.boolean({
      description: 'confirm the update',
      default: false
    }),
    help: flags.help({char: 'h'}),
  }

  static examples = [
    'customers:update --id=8963 --data="{"email": "johndoe@entreprise.com", first}"',
    'customers:list --email=',
    'customers:list --page=2',
  ]

  async run() {
    const {flags} = this.parse(CustomersUpdate)
    const apiKey = flags['api-key']
    const environment = flags.environment
    const id = flags.id
    const data =  JSON.parse(flags.data)
    const confirm = flags.confirm


    FedaPay.setApiKey(apiKey)
    FedaPay.setEnvironment(environment)

    this.log(data)// to remove after
    if(confirm){
      const customers = await Customer.update(id,data)
      this.log(colorize(JSON.stringify(customers, null, 2)))
    }
    else{

      const confirmPrompt = await cli.confirm('Would you like to continue? [Y/n]')
      if(confirmPrompt){
        const customers = await Customer.update(id,data)
        this.log(colorize(JSON.stringify(customers, null, 2)))
      }
      else {
        this.warn('Update canceled')
        this.exit
      }
    }

  }
}

