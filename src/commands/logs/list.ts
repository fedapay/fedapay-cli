import {flags} from '@oclif/command';
import {FedaPay, Log} from 'fedapay';
import colorize from 'json-colorizer';
import chalk from 'chalk';
import { cli } from 'cli-ux';
import logs from '../logs';
import DataFlagTransformer from '../../helpers/dataparse';

/**
 * LogsList command class.
 */
export default class LogsList extends logs {
  /**
     * @param string
     * Description of logs:list command.
     */
  static description = 'List of the logs records.';

  /**
     * @param object
     * Declaration of the command flags.
    */
  static flags = {
    ...logs.flags,
    limit: flags.integer({
      char: 'l',
      description: 'Limit of records to display.',
      default: 10,
    }),
    filter: flags.string({
      char: 'f',
      description: 'Filter the list of logs.',
      multiple: true,
    }),
    help: flags.help({char: 'h', description: 'Help for logs:list' }),
  };

  /**
   * @param string[]
   * Some examples of the logs:list use for help.
   */
  static examples = [
    'logs:list -api-key=[API-KEY] --environment=[ENVIRONMENT] -f method=POST',
    'logs:list -api-key=[API-KEY] --environment=[ENVIRONMENT] -f status=400 -f method=GET -f status=200',
  ];

  async run() {
    /**
     * @param object
     * Get flags value.
     */
    const {flags} = this.parse(LogsList);
    /**
     * @param string
     * Api key value.
     */
    const apiKey = flags['api-key'];

    /**
     * @param string
     * Environment type.
     */

    const environment = flags.environment;
    /**
     * @param number
     * Store the number of logs to display.
     */
    const limit = flags.limit;

    const filter: object|string = DataFlagTransformer.transformFiltersForES(flags.filter);

    /**
     * Set Apikey and environment to connect to fedapay
     */
    FedaPay.setApiKey(apiKey);
    FedaPay.setEnvironment(environment);

    try {
      cli.action.start('Getting the customers list');
      if (typeof filter === 'object') {
        const filterObject = {
          per_page: limit,
          ...filter,
          match: 'must',
        };
        const Logs = await Log.all(filterObject);
        this.log(colorize(JSON.stringify(Logs, null, 2)));
      } else {
        this.error(chalk.red(filter));
      }
    } catch (error) {
      this.error(chalk.red(`${error.name} : ${error.message}`));
    }
    cli.action.stop();
  }
}
