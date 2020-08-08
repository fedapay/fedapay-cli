import { Command, flags } from '@oclif/command'
import { FedaPay, Payout, Transaction } from 'fedapay'
import Payouts from '../payouts'
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
      required: true,
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
    const data = {
      "amount": 1000,
      "currency": { "iso": "XOF" },
      "mode": "mtn",
      "customer": {
        "email": "johny.doe@example.com",
      },
      "scheduled_at": "2020-08-12T16:59:39.168Z"
    }

    FedaPay.setApiKey(apiKey)
    FedaPay.setEnvironment(environment)
    try {
      //get details of payout
      const payout = Payout.create(data)
        ; (await payout).schedule(when)
      /*{
     "id": id,
     "scheduled_at":when
    }*/

      this.log("Succesfully sent")
    } catch (error) {
      this.error("date not match")
    }

  }
}
