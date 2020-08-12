import { flags } from '@oclif/command';
import { FedaPay, Payout } from 'fedapay';
import Payouts from '../payouts';
import { cli } from 'cli-ux';
import chalk = require('chalk');

/**
 * PayoutsSchedule class
 */
export default class PayoutsSchedule extends Payouts {
  /**
   * @param string
   * Description of the payouts:schedule command
   */
  static description = 'Schedule a payout to be sent later.';

  /**
   * @param object
   * Declaration of the command flags
  */
  static flags = {
    ...Payouts.flags,
    id: flags.integer({
      description: 'The id of the payout to schedule',
      required: true,
    }),
    when: flags.string({
      description: 'The DateTime of the schedule in the format YYYY-MM-DD HH:mm:ss GMT',
      required: true,
      char: 'w'
    }),
    help: flags.help({ char: 'h', description: 'Help for payouts:schedule' })
  };

  /**
   * @param string[]
   * schedule payouts command
   */
  static examples = [
    'payouts:schedule --api-key=[API-KEY] --environment=[env] --id=[ID] --when="2020-8-12 11:41:51"',
  ]

  async run() {
    /**
      *  Get flags object from CustommersList
      *  and use them to retrieve and list the custommers
      */
    /**
     * @param object
     * get flags value
     */
    const { flags } = this.parse(PayoutsSchedule);

    /**
     * @param string
     * api key value
     */
    const apiKey = flags['api-key'];

    /**
     * @param string
     * environment type
     */
    const environment = flags.environment;

    /**
     * @param number
     * The payout ID
     */
    const id = flags.id;

    /**
     * @param string
     * The schedule date
     */
    const when = flags.when;

    FedaPay.setApiKey(apiKey);
    FedaPay.setEnvironment(environment);

    try {
      cli.action.start('Retrieving payout');

      const payout = await Payout.retrieve(id);

      cli.action.start('Scheduling payout');
      payout.schedule(when);
      this.log(chalk.green(`Payout schedule for ${when}`));
    } catch (error) {
      this.error(error.message);
    }
    cli.action.stop();
  }
}
