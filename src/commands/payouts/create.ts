import { flags } from '@oclif/command';
import { FedaPay, Payout } from 'fedapay';
import * as colorize from 'json-colorizer';
import Payouts from '../payouts'
import { resolve } from 'dns';
import cli from 'cli-ux';
import chalk from 'chalk';
import DataFlagtransformer from '../../helpers/dataparse';
/*
*PayoutsCreate Class extending the superClass Payouts
*/
export default class PayoutsCreate extends Payouts {
  /**
   * @param string
   * Description of the command payouts:create
  */
  static description = 'Create payout ressources'

  /**
   * @param Object
   * Insertion of the different commands flags
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
   * examples of payouts:create command
   */
  static examples = [
    'payouts:create --api-key=[api_key] --environment=sandbox',
    'payouts:create --api-key=[api_key] --environment=sandbox -d amount=5000 -d currency[iso]=XOF -d mode=mtn -d customer[firstname]=Qan customer[lastname]=Sally customer[email]=nal@exemple.com customer[phone_number][number]=65423158 customer[phone_number][country]=bj',
    'payouts:create --api-key=[api_key] --environment=sandbox amount=5000 -d currency[iso]=XOF -d mode=mtn -d customer[firstname]=Chad customer[lastname]=Ly  customer[phone_number][number]=65423158 customer[phone_number][country]=bj --customer=1025',
    'payouts:create --api-key=[api_key] --environment=sandbox--schedule="2020-8-12 11:41:51"',
    'payouts:create --api-key=[api_key] --environment=sandbox --sendnow',
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
      /**
       * @param Payout
       * created payout
      */
      cli.action.start('Retrieve payout');
      const payout = await Payout.create(data);
      this.log(chalk.green('Payout created succesfully!'));
      this.log(colorize(JSON.stringify(payout, null, 2)));
      if (flags.sendnow) {
        /**
         * @param boolean
         * send after create payout
        */
        cli.action.start('Sending payout');
        await payout.sendNow();
        this.log(chalk.green('sent'));
      }
      if (flags.schedule) {
        /**
         * @param string
         * schedule to a date
         */
        cli.action.start('Schedule the payout');
        await payout.schedule(date);
        this.log(chalk.green('started'));
      }
    } catch (error) {
      this.log('Oups something occured');
      this.error(error.message);
    }
    cli.action.stop();
  }
}


