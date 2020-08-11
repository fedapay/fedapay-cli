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
  static usage = 'fedapay payouts:create [options]'
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
    'payouts:create --api-key=[api_key] --environment=sandbox',
    'payouts:create --api-key=[api_key] --environment=sandbox -d amount=5000 -d currency[iso]=XOF -d mode=mtn -d customer[firstname]=Qan customer[lastname]=Sally customer[email]=nal@exemple.com customer[phone_number][number]=65423158 customer[phone_number][country]=bj',
    'payouts:create --api-key=[api_key] --environment=sandbox amount=5000 -d currency[iso]=XOF -d mode=mtn -d customer[firstname]=Chad customer[lastname]=Ly  customer[phone_number][number]=65423158 customer[phone_number][country]=bj --customer=1025',
    'payouts:create --api-key=[api_key] --environment=sandbox--schedule="2020-8-12 11:41:51"',
    'payouts:create --api-key=[api_key] --environment=sandbox --send-now',
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


