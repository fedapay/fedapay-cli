import { Command, flags } from '@oclif/command'
import { FedaPay, Payout, Transaction } from 'fedapay'
import * as colorize from 'json-colorizer'
import Payouts from '../payouts'
import { resolve } from 'dns';

export default class PayoutsCreate extends Command {
  static description = 'Create some payouts'

  static flags = {
    ...Payouts.flags,
    data: flags.string({
      description: 'Create a payout',
      required: false,

    }),
    customer: flags.integer({
      description: 'Create the payout per customer',
      default: 2055,
    }),

    help: flags.help({ char: 'h' }),

  }
  static examples = [
    'payouts:create',
    'payouts:create --data',
    'payouts:create --customer',
    'payouts:create --schedule="date"',
    'payouts:create --send-now',
  ]


  async run() {
    const { args, flags } = this.parse(PayoutsCreate)
    const apiKey = flags['api-key']
    const environment = flags.environment
     const data = flags.data
    const infos = {
      "amount": 2000,
      "currency": { "iso": "XOF" },
      "mode": "mtn",
      "customer": {
        "email": "john.doe@example.com",
      }
    }
    //const result = await inquirer.prompt(infos)


    FedaPay.setApiKey(apiKey)
    FedaPay.setEnvironment(environment)

    try {
      const payout = await Payout.create(infos)
      console.log('Succesfully inserted')
    } catch (error) {
      console.log(error)
      // console.log(error ? error.httpResponse : '')
      // console.log(error && error.httpResponse ? error.httpResponse.data : '')
      console.error('Bad insertion')
    }    

  }
}


