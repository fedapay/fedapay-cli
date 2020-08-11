import { Command, flags } from '@oclif/command'
import { FedaPay, Payout } from 'fedapay'
import * as colorize from 'json-colorizer'
import Payouts from '../payouts'
import { resolve } from 'dns';
import DataFlagtransformer from '../../helpers/dataparse'
/**PayoutsCreate class*/
export default class PayoutsCreate extends Command {
  /**
   * @param string
   * Description of the payouts:create command  */
  static description = 'Create payout ressources'
  /**
   * @param object
   * Declaration of the command flags
   */
  static flags = {
    ...Payouts.flags,
    data: flags.string({
      char: 'd',
      description: 'The data of payout to create',
      required: false,
      multiple: true,
    }),
    schedule: flags.string({
      description: 'The DateTime of the schedule in the format YYYY-MM-DD HH:mm:ss',
    }),
    customer: flags.string({
      description: 'The customer to pay',
    }),
    sendnow: flags.boolean({
      description: 'Send automatically the payout',
      default: true
    }),

    help: flags.help({
      char: 'h',
      description: 'You can found all the create commands'
    }),

  }
  /**
   * @param string[]
   * examples
   */
  static examples = [
    'payouts:create',
    'payouts:create --data',
    'payouts:create --customer',
    'payouts:create --schedule="date"',
    'payouts:create --send-now',
  ]


  async run() {
    const { args, flags } = this.parse(PayoutsCreate)
    /**
     * @param string
     * api-key value
     */
    const apiKey = flags['api-key']
    /**
     * @param string
     * environnement sandbox or live
     */
    const environment = flags.environment
    /** 
     * @param object
     * parsing data flag input to object
     */
    const data = DataFlagtransformer.Transform(flags.data)
    /**
     * @param string
     * date in format YYYY-MM-DD HH:mm:ss
     */
    const date = "2020-8-12 11:41:51"
    /**
     * @param string
     * set api-key value for authenticating
     */
    FedaPay.setApiKey(apiKey)
    /**
     * @param string
     * set the environment tor authenticating
     * 
     */
    FedaPay.setEnvironment(environment)

    try {
      const payout = await Payout.create(data)
      this.log('Succesfully payout created')
      if (flags.sendnow) {
        await payout.sendNow()
        this.log('Payout sent')
      }
      if (flags.schedule) {
        await payout.schedule(date)
        this.log('Payout started ')
      }
    } catch (error) {
      this.error(`${error.name} : ${error.message}`)
    }

  }
}


