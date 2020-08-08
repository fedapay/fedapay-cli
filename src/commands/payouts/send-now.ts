import { Command, flags } from '@oclif/command'
import { FedaPay, Payout, Transaction } from 'fedapay'
import Payouts from '../payouts'
import chalk from 'chalk'

export default class PayoutsSendNow extends Command {
  static description = 'Send a payout now'

  static flags = {
    ...Payouts.flags,
    //produce data passing flags
    ids: flags.integer({
      description: 'Send all payouts by id',
      default:66|70,
    }),
    data: flags.string({
      description: 'Send a payout by id',
      required: false,

    }),

    help: flags.help({ char: 'h' }),

  }

  async run() {
    const { args, flags } = this.parse(PayoutsSendNow)
    const apiKey = flags['api-key']
    const environment = flags.environment
    const ids = flags.ids
    const data = flags.data

    FedaPay.setApiKey(apiKey)
    FedaPay.setEnvironment(environment)
    try {
      const payout = await Payout.create(data)
      await payout.sendNow()
      
      //if id is required send all payout 
      await Payout.sendAllNow([ids])
    } catch (error) {
      this.log('Undefined')

    }

  }
}
