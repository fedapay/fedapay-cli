import { flags } from '@oclif/command';
import { FedaPay, Payout } from 'fedapay';
import cli from 'cli-ux';
import chalk from 'chalk';
import Payouts from '../payouts';

/**
 * PayoutsDelete Class
 */
export default class PayoutsDelete extends Payouts {
  /**
   * @param string
   * Description of payouts:delete command
   */

  static description = 'Delete payout ressource'
  /**
   * @param Object
   * delete command flags
   */
  static flags = {
    ...Payouts.flags,
    id: flags.integer({
      description: 'The id of a payout to delete',
      required: true,
    }),
    confirm: flags.boolean({
      description: 'Confirm the delete',
      default: false,
      char: 'c',
    }),
    help: flags.help({
      char: 'h',
      description: 'Help for founding others delete commands'
    }),
  }

  /**
   * @param string[]
   * examples for the delete commands
   */

  static examples = [
    'payouts:delete --api-key=[api_key] --environment=sandbox --id=90',
    'payouts:delete --api-key=[api_key] --environment=sandbox --id=108 --confirm',

  ]

  async run() {
    /**
     * @param Object
     * get the delete flags
    */

    const { flags } = this.parse(PayoutsDelete);
    /**
     * @param string
     * the api-key
     */
    const apiKey = flags['api-key'];
    /**
     * @param string
     * the environment
     */
    const environment = flags.environment;
    /**
     * @param integer
     * id of the payout
     */
    const id = flags.id;

    /**
     * connect to Fedapay with config set up
     */
    FedaPay.setApiKey(apiKey)
    FedaPay.setEnvironment(environment)

    try {
      cli.action.start('Retrieving payout');
      const payout = await Payout.retrieve(id);
      /**
   * @param boolean
   * confirm flag
   */
      const confirm = flags.confirm
      /**
        * @param boolean
        * Skip to confirm automatically or after yes
        */

      const confirmed = confirm || await cli.confirm('Are you sure you want to delete?');
      if (confirmed) {
        if (!payout) {
          this.log('Don\'t match')
        }
        else {
          /**
           * delete only if payout is pending
           */
          if (payout.status == 'pending') {
            cli.action.start('Deleting payout');
            await payout.delete();
            this.log(chalk.blue("Payout deleted"));
          }
        }
      }
      else {
        this.log(chalk.red('Deletion canceled'));
      }
    } catch (error) {
      this.error(error.message);
    }
    cli.action.stop();
  }
}
