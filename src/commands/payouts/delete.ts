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
  static description = 'Delete payout ressource';

  /**
   * @param Object
   * delete command flags
   */
  static flags = {
    ...Payouts.flags,
    id: flags.integer({
      description: 'The payout ID.',
      required: true,
    }),
    confirm: flags.boolean({
      description: 'Skip the warning prompt and automatically confirm the command being entered.',
      default: false,
      char: 'c',
    }),
    help: flags.help({ char: 'h', description: 'Help for payouts:delete.' }),
  };

  /**
   * @param string
   * Set the command usage for help
   */
  static usage = 'payouts:delete [options]';

  /**
   * @param string[]
   * examples for the delete commands
   */
  static examples = [
    'payouts:delete --api-key=[API-KEY] --environment=[env] --id=[ID]',
    'payouts:delete --api-key=[API-KEY] --environment=[env] --id=[ID] -c'
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
    const apiKey = this.userConfig.read('secret_key', flags['api-key']);

    /**
     * @param String
     * sandbox or live
     */
    const environment = this.userConfig.read('environment', flags.environment);

    /**
     * @param integer
     * id of the payout
     */
    const id = flags.id;

    /**
     * connect to Fedapay with config set up
     */
    FedaPay.setApiKey(apiKey);
    FedaPay.setEnvironment(environment);

    /**
     * @param boolean
     * true if the user set the --confirm flag or input yes in the terminal
     */
    const confirm = flags.confirm || await cli.confirm(
      'Are you sure to continue? [Y/n]'
    );

    if (confirm) {
      try {
        cli.action.start('Retrieving payout');
        const payout = await Payout.retrieve(id);

        cli.action.start('Deleting payout');
        await payout.delete();
        this.log(chalk.green('Payout delected successfully.'));
      } catch (error) {
        this.error(error.message);
      }
    } else {
      this.log(chalk.yellow('Deletion canceled.'));
    }

    cli.action.stop();
  }
}
