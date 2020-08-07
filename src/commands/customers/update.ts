import {flags} from '@oclif/command'
import {FedaPay, Customer} from 'fedapay'
import * as colorize from 'json-colorizer'
import Customers from '../customers'
import cli from 'cli-ux'
import * as chalk from 'chalk'

export default class CustomersUpdate extends Customers {
  static description = 'Udapde an customer informations'

  static flags = {
    ...Customers.flags,
    id: flags.integer({
      description: 'the id of the customer to update',
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
    'customers:update --id=2047 --data={\"email\":\"johndo@gmail.com\"}',
    'customers:update --id=2047 --data={\"email\":\"johndo@gmail.com\"} --confirm',
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
        try {
          const customers = await Customer.update(id,data)
          this.warn(chalk.greenBright(`Customer ${id} updated successfully`))
          this.log(colorize(JSON.stringify(customers, null, 2))) 
        } catch (error) {
          this.log(chalk.red(`Error!:${error} Maybe customer ${id}  not found`))
          this.exit
        }
        
      }
      else {
        this.warn('Update canceled')
        this.exit
      }
    }

  }
}

