import { Command, flags } from '@oclif/command'
import { FedaPay, Payout, Transaction } from 'fedapay'
import Payouts from '../payouts'
/**
 * PayoutsSchedule class
 */  
export default class PayoutsSchedule extends Command {
  /**
   * @param string 
   * Description of the payouts:schedule command
   */
  static usage = 'fedapay payouts:schedule [options]'
  static description = 'Program the payout for later'
  static flags = {
    ...Payouts.flags,
    id: flags.integer({
      description: 'The id of the payout to schedule',
      required: true,
    }),
    when: flags.string({
      description: 'The DateTime of the schedule in the format YYYY-MM-DD HH:mm:ss',
      required: true,
    }),
    help: flags.help({ char: 'h' }),
  }
  /**
   * @param string[]
   * schedule payouts command
   */
  static examples = [
    'payouts:schedule' ,
    'payouts:schedule --api-key=[api_key] --environment=sandbox --id=102 --when="2020-8-12 11:41:51"',

  ]


  async run() {
    const { flags } = this.parse(PayoutsSchedule)
    const apiKey = flags['api-key']
    const environment = flags.environment
    const id = flags.id
    const when = flags.when

    FedaPay.setApiKey(apiKey)
    FedaPay.setEnvironment(environment)
    try {
      /**
       * @param object
       *get details of payout 
       */
      const payout = await Payout.retrieve(id)
      if (!payout) {
        this.log('Don\'t match')
      }
      else {
        /**
         * @param string
         *schedule only payout wich is pending 
         */
        if (payout.status == 'pending') {
          payout.schedule(when)
          this.log("Succesfully sent")
        }
      }
    } catch (error) {
      this.error(`${error.name} : ${error.message}`)
    }

  }
}
