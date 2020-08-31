import { flags } from '@oclif/command';
import { FedaPay, Payout } from 'fedapay';
import colorize from 'json-colorizer';
import cli from 'cli-ux';
import Payouts from '../payouts';
import DataFlagTransformer from '../../helpers/dataparse';

/**
 * PayoutsList commnd class
 */
export default class PayoutsList extends Payouts {
  /**
   * @param string
   * Description of payouts:delete command
   */
  static description = 'List of the payout records.';

  /**
   * @param object
   * Declaration of the command flags
  */
  static flags = {
    ...Payouts.flags,
    limit: flags.integer({
      char: 'l',
      description: 'Limit of records to display.',
      default: 10,
    }),
    filters: flags.string({
      char: 'f',
      description: 'Filter the list of payouts.',
      multiple: true,
    }),
    page: flags.integer({
      description: 'The page of the records to display.',
      char: 'p',
      default: 1
    }),
    help: flags.help({ char: 'h', description: 'Help for payouts:list' })
  };

  /**
   * @param string
   * Set the command usage for help
   */
  static usage = 'payouts:list [options]';

  static examples = [
    'payouts:list --api-key=[API-KEY] --environment=[env] --limit=20',
    'payouts:list --api-key=[API-KEY] --environment=[env] --page=2',
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
    const { flags } = this.parse(PayoutsList);

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
     * store the number of customers to display
     */
    const limit = flags.limit;

    /**
     * @param number
     * store the number of the page to display
     */
    const page = flags.page;

    /**
     * @param Object
     * The filter flag
     * TODO: Use filter for the list
     */
    const filters = DataFlagTransformer.transformFilters(flags.filters);

    /**
     * Set Apikey and environment to connect to fedapay
     */
    FedaPay.setApiKey(apiKey);
    FedaPay.setEnvironment(environment);

    cli.action.start('Getting the payouts list');

    const payouts = await Payout.all({
      per_page: limit, page: page,
      ...filters
    });
    this.log(colorize(JSON.stringify(payouts, null, 2)));
    cli.action.stop();
  }
}
