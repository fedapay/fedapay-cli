import {flags} from '@oclif/command'
import {FedaPay, Customer} from 'fedapay'
import * as colorize from 'json-colorizer'
import Customers from '../customers'
import cli from 'cli-ux'
import * as chalk from 'chalk'

export default class CustomersCreate extends Customers {
  static description = 'Create a customer'

  static flags = {
    ...Customers.flags,
    data: flags.string({
      description: 'Json Data of the customer',
      required: true
    }),
    help: flags.help({char: 'h'}),
  }

  static examples = [
    'customers:create --data={\"firstname\":\"GOUSSANOU\",\"lastname\":\"Pethuel\",\"email\":\"pethou@gmail.com\"}',
    'customers:create --api-key=sk_sandbox_6mHuOmKl5H9gbapBFdscGbpI --environment=sandbox --data={\"firstname\":\"GNANSOU\",\"lastname\":\"Adon\",\"email\":\"gnanadon@gmail.com\",\"phone_number\":{\"number\":\"98784598\",\"country\":\"BJ\"}}'
  ]

  async run() {
    const {flags} = this.parse(CustomersCreate)
    const apiKey = flags['api-key']
    const environment = flags.environment
    const data =  JSON.parse(flags.data)

    FedaPay.setApiKey(apiKey)
    FedaPay.setEnvironment(environment)

    this.log(data)// to remove after

      const confirmPrompt = await cli.confirm('Would you like to continue? [Y/n]')
      if(confirmPrompt){
        try {
          const customers = await Customer.create(data)
          this.warn(chalk.greenBright(`Customer created successfully`))
          this.log(colorize(JSON.stringify(customers, null, 2))) 
        } catch (error) {
          this.log(chalk.red(`Error!:${error}`))
          this.exit
        }
      }
      else {
        this.warn('Create canceled')
        this.exit
      }
    

  }
}
