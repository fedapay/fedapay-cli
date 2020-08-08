import {Command, flags} from '@oclif/command'
import { FedaPay, Payout, Transaction } from 'fedapay'
import Payouts from '../payouts'
import chalk from 'chalk'
//class for programming a payout 
export default class PayoutsSchedule extends Command {
  static description = 'Program the payout for later'
  static flags = {
    ...Payouts.flags,
    id: flags.integer({
      description: 'Program a payout',
      required: true,
    }),
    when: flags.string({
      description: 'Program with date',
      default: "01/02/2000 01:02:34",
      required: true
    }),
    data: flags.string({
      description: 'Program with data',
      required: true
    }),
    help: flags.help({ char: 'h' }),
  }
  static examples = [
    'payouts:schedule',
    'payouts:schedule --id',
    'payouts:schedule --when',

  ]




 

  async run() {
    const { flags } = this.parse(PayoutsSchedule)
    const apiKey = flags['api-key']
    const environment = flags.environment
    const id = flags.id
    const when = flags.when
    let d = new Date()
    let a = d.toString()
    console.log(a)
    FedaPay.setApiKey(apiKey)
    FedaPay.setEnvironment(environment)
    try {
      //get details of payout
      const payout = Payout.retrieve(id)
       ;(await payout).schedule(when)
      this.log(chalk.green("Succesfully sent")) 
    } catch (error) {
      this.error("date not match")
    }
    
  }
}
