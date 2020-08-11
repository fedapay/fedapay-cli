import { Command, flags } from '@oclif/command'
import { FedaPay, Payout, Transaction } from 'fedapay'
import Payouts from '../payouts'
import DataFlagtransformer from '../../helpers/dataparse'
/**
 *  PayoutsSendNow class
 */
export default class PayoutsSendNow extends Command {
  static description = 'Send a payout now'
  static usage = 'fedapay payouts:send-now [options]'
  static flags = {
    ...Payouts.flags,
    /**
     *@param object
     *  provide data passing flags
     */
    id: flags.string({
      description: 'The payout id',
    }),
    help: flags.help({
      char: 'h',
      description: 'Help you to see others commands'
    }),
  }
  /**
   * @param string[]
   * examples of send-now command for the help
   */
  static examples = [
    'payouts:send-now --id=105',
    'payouts:send-now --ids=1,2...',
  ]

  async run() {
    const { args, flags } = this.parse(PayoutsSendNow)
    const apiKey = flags['api-key']
    const environment = flags.environment
    const id = flags.id
    //const test = [id]

    FedaPay.setApiKey(apiKey)
    FedaPay.setEnvironment(environment)
    //const input_id = flags.id || flags.ids
    try {
      /**
       * @param string
       * the input data sent is a string
       * transform data in array of object  
       * @param {Object}
       */
      if (id) {
        let obj = {}
        let raw_input = []
        let input_id = id.split(",")
        for (var i = 0; i < input_id.length; i++) {
          const array_input = [input_id[i]]
          /**
           * serialize input ids to an array of object
           */
          obj = DataFlagtransformer.Transform(array_input)
          raw_input.push(obj)
        }
        console.log(raw_input)
        await Payout.sendAllNow(raw_input)
      }
    }

    catch (error) {
      this.error(`${error.name} ${error.message}`)

    }

  }
}
