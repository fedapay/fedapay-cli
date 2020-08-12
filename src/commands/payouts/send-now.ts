import { flags } from '@oclif/command';
import { FedaPay, Payout, Transaction } from 'fedapay';
import Payouts from '../payouts';
import cli from 'cli-ux';
import chalk from 'chalk';
import DataFlagtransformer from '../../helpers/dataparse';
/**
 *  PayoutsSendNow class
 */
export default class PayoutsSendNow extends Payouts {
  static description = 'Send a payout now'

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
    'payouts:send-now --id="id=105"',
    'payouts:send-now --id="id=105,id=108"',

  ]

  async run() {
    const { args, flags } = this.parse(PayoutsSendNow)
    const apiKey = flags['api-key']
    const environment = flags.environment
    const id = flags.id
    FedaPay.setApiKey(apiKey)
    FedaPay.setEnvironment(environment)
    try {
      /**
       * @param string
       * the input data sent is a string
       * transform data in array of object
       * @param {Object}
       */
      cli.action.start('Sending the payouts');
      if (id) {
        let obj = {};
        let raw_input = [];
        let input_id = id.split(",");
        for (var i = 0; i < input_id.length; i++) {
          const array_input = [input_id[i]];
          /**
           * serialize input ids to an array of object
           */
          obj = DataFlagtransformer.Transform(array_input);
          raw_input.push(obj);
        }
        await Payout.sendAllNow(raw_input);
      }
    }
    catch (error) {
      this.error(`${error.name} ${error.message}`);

    }
    cli.action.stop();
  }
}
