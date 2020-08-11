import { Command, flags } from '@oclif/command'
import { FedaPay, Payout, Transaction } from 'fedapay'
import Payouts from '../payouts'
import DataFlagtransformer from '../../helpers/dataparse'
/**
 *  PayoutsSendNow class
 */
export default class PayoutsSendNow extends Command {
  static description = 'Send a payout now'

  static flags = {
    ...Payouts.flags,
    /**
     *@param object
     *  provide data passing flags
     */
    id: flags.integer({
      description: 'The payout id',
    }),
    ids: flags.string({
      description: 'The IDs of the payouts. Eg. 1,2,3',

    }),
    help: flags.help({
      char: 'h',
      description: 'Would you want to see others commands?'
    }),
  }
  /**
   * @param string[]
   * examples of send-now command for the help
   */
  static examples = [
    'payouts:send-now',
    'payouts:send-now --id',
    'payouts:send-now --ids=1,2...',
  ]

  async run() {
    const { args, flags } = this.parse(PayoutsSendNow)
    const apiKey = flags['api-key']
    const environment = flags.environment
    const ids = flags.ids
    const id = flags.id

    FedaPay.setApiKey(apiKey)
    FedaPay.setEnvironment(environment)
    try {
      /**
       * @param integer
       * get details of the payout
       */
      const payout = await Payout.retrieve(id)
      if (!payout) {
        this.log('Don\'t match')
      }
      else {
        /**
         * @param string
         * send only payout wich is pending
         */
        if (payout.status == 'pending') {
          payout.sendNow()
        }
        /**
         * @param string[]
         * @param {object}
         */
          if(ids){
            const val =ids.split(",")
            await Payout.sendAllNow(val.map(id=>+id)
            )
          }
      }
    } catch (error) {
      this.log('Undefined')

    }

  }
}
