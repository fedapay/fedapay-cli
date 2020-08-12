import { flags } from '@oclif/command';
import { FedaPay, Payout } from 'fedapay';
import colorize from 'json-colorizer';
import cli from 'cli-ux';
import chalk from 'chalk';
import Payouts from '../payouts';
import DataFlagtransformer from '../../helpers/dataparse';

/**
 * PayoutsCreate Class extending the superClass Payouts
 */
export default class PayoutsCreate extends Payouts {
  /**
   * @param string
   * Description of the command payouts:create
  */
  static description = 'Create a new payout.';

  /**
   * @param Object
   * Insertion of the different commands flags
   */
  static flags = {
    ...Payouts.flags,
    data: flags.string({
      char: 'd',
      description: 'Data for the API request.',
      required: false,
      multiple: true
    }),
    schedule: flags.string({
      description: 'The DateTime of the schedule in the format YYYY-MM-DD HH:mm:ss',
    }),
    'send-now': flags.boolean({
      description: 'Send automatically the payout',
      default: false
    }),
    help: flags.help({ char: 'h', description: 'Help for payouts:create.' })
  };

  /**
   * @param string[]
   * examples of payouts:create command
   */
  static examples = [
    'payouts:create --api-key=[API-KEY] --environment=[env] -d amount=5000 -d currency[iso]=XOF -d mode=mtn -d customer[firstname]=Qan customer[lastname]=Sally customer[email]=nal@exemple.com customer[phone_number][number]=65423158 customer[phone_number][country]=bj',
    'payouts:create --api-key=[API-KEY] --environment=[env] -d amount=5000 -d currency[iso]=XOF -d mode=mtn -d customer[id]=[ID]',
    'payouts:create --api-key=[API-KEY] --environment=[env] -d amount=5000 -d currency[iso]=XOF -d mode=mtn -d customer[id]=[ID] --schedule="2020-8-12 11:41:51"',
    'payouts:create --api-key=[API-KEY] --environment=[env] -d amount=5000 -d currency[iso]=XOF -d mode=mtn -d customer[id]=[ID] --send-now',
  ];

  async run() {
    const { flags } = this.parse(PayoutsCreate);

    /**
     * @param string
     * api-key value
     */
    const apiKey = flags['api-key'];

    /**
     * @param string
     * environnement sandbox or live
     */
    const environment = flags.environment;

    /**
     * @param object
     * parsing data flag input to object
     */
    const data = DataFlagtransformer.transform(flags.data);

    /**
     * @param string
     * set api-key value for authenticating
     */
    FedaPay.setApiKey(apiKey);
    FedaPay.setEnvironment(environment);

    try {
      /**
       * @param Payout
       * created payout
       */
      cli.action.start('Creating payout');
      const payout = await Payout.create(data);
      this.log(colorize(JSON.stringify(payout, null, 2)));

      if (flags['send-now']) {
        /**
         * @param boolean
         * send after create payout
         */
        cli.action.start('Sending payout');
        await payout.sendNow();
        this.log(chalk.green('Payout sent'));
      } else if (flags.schedule) {
        /**
         * @param string
         * schedule to a date
         */
        cli.action.start('Scheduling payout');
        await payout.schedule(flags.schedule);
        this.log(chalk.green(`Payout schedule for ${flags.schedule}`));
      }
    } catch (error) {
      this.log('Oups something occured');
      this.error(error.message);
    }

    cli.action.stop();
  }
}
