import { flags } from '@oclif/command';
import { FedaPay, Payout } from 'fedapay';
import cli from 'cli-ux';
import colorize from 'json-colorizer';
import Payouts from '../payouts';
import DataFlagtransformer from '../../helpers/dataparse';

/**
 * PayoutsUpdate class
 */
export default class PayoutsUpdate extends Payouts {
  /**
   * @param string
   * Description of the command Custommers:update description
   */
  static description = 'Update a payout.';

  /**
   * @param object
   * Declaration of the command flags
  */
  static flags = {
    ...Payouts.flags,
    id: flags.integer({
      description: 'The pauyout ID.',
      required: true
    }),
    data: flags.string({
      description: 'Data for the API request.',
      required: true,
      char: 'd',
      multiple: true,
    }),
    help: flags.help({ char: 'h', description: 'Help for payouts:update command.' }),
  };

  /**
   * @param string[]
   * examples command for the help
   */
  static examples = [
    'payouts:update --api-key=[API-KEY] --environment=[env] --id=90 -d amount=550 -d currency[iso]=XOF -d mode=moov -d customer[firstname]=Yu customer[lastname]=Ma customer[email]=vul@exemple.com customer[phone_number][number]=65423158 customer[phone_number][country]=bj',
    'payouts:update --api-key=[API-KEY] --environment=[env] --id=109 -d customer[id]=2055',
  ];

  async run() {
    /**
     * @param object
     * get flags value
     */
    const { flags } = this.parse(PayoutsUpdate);

    /**
     * @param string
     * api key value
     */
    const apiKey = this.userConfig.read('secret_key', flags['api-key']);

    /**
     * @param String
     * sandbox or live
     */
    const environment = this.userConfig.read('environment', flags.environment);

    /**
     * @param number
     * store the customer id
     */
    const id = flags.id;

    /**
     * @param object
     * result of transforming flags.data into Typescript Object
     */
    const data = DataFlagtransformer.transform(flags.data);

    /**
     * Set Apikey and environment to connect to fedapay
     */
    FedaPay.setApiKey(apiKey);
    FedaPay.setEnvironment(environment);

    try {
      /**
       * @param object
       */
      cli.action.start('Updating payout');
      const payout = Payout.update(id, data);
      this.log(colorize(JSON.stringify(payout, null, 2)));
    } catch (error) {
      this.error(error.message);
    }

    cli.action.stop();
  }
}
