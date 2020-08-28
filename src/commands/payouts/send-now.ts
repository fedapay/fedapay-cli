import { flags } from '@oclif/command';
import { FedaPay, Payout } from 'fedapay';
import Payouts from '../payouts';
import cli from 'cli-ux';

/**
 *  PayoutsSendNow class
 */
export default class PayoutsSendNow extends Payouts {
  /**
   * @param string
   * Description of the payouts:schedule command
   */
  static description = 'Send payouts.';

  static flags = {
    ...Payouts.flags,
    /**
     *@param object
     *  provide data passing flags
     */
    id: flags.string({
      description: 'The payouts id.',
      multiple: true,
      required: true
    }),
    help: flags.help({ char: 'h', description: 'Help for payouts:send-now.' })
  };

  /**
   * @param string[]
   * examples of send-now command for the help
   */
  static examples = [
    'payouts:send-now --id=105',
    'payouts:send-now --id=105 --id=108"'
  ];

  async run() {
    /**
      *  Get flags object from CustommersList
      *  and use them to retrieve and list the custommers
      */
    /**
     * @param object
     * get flags value
     */
    const { flags } = this.parse(PayoutsSendNow);

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
     * The payout ID
     */
    const ids: any[] = flags.id.map(i => {
      return {id: i};
    });

    FedaPay.setApiKey(apiKey);
    FedaPay.setEnvironment(environment);

    try {
      /**
       * @param string
       * the input data sent is a string
       * transform data in array of object
       * @param {Object}
       */
      cli.action.start('Sending the payouts');

      await Payout.sendAllNow(ids);
    } catch (error) {
      this.error(error.message);
    }

    cli.action.stop();
  }
}
