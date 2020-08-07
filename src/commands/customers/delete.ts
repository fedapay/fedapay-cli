import {flags} from '@oclif/command'
import {FedaPay, Customer} from 'fedapay'
import Customers from '../customers'
import cli from 'cli-ux'
import * as chalk from 'chalk'

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
      try {
          const custom = await Customer.retrieve(id)
          custom.delete()
          this.warn(chalk.greenBright(`Customer ${id} delected successfully`))
      } catch (error) {
          this.log(chalk.red(`Error!:${error} Maybe customer ${id}  not found`))
          this.exit
      }
    }
    else{

      const confirmPrompt = await cli.confirm('Would you like to continue? [Y/n]')
      if(confirmPrompt){
        try {
            const custom = await Customer.retrieve(id)
            const customers = custom.delete()
            this.warn(chalk.greenBright(`Customer ${id} delected successfully`))
        } catch (error) {
          this.log(chalk.red(`Error!:${error} Maybe customer ${id}  not found`))
            this.exit
        }
            
      }
      else {
        this.warn(chalk.yellow('Delete canceled'))
        this.exit
      }
    }
  }
}
