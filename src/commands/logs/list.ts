import {flags} from '@oclif/command';
import {FedaPay, Log} from 'fedapay';
import colorize from 'json-colorizer';
import chalk from 'chalk';
import { cli } from 'cli-ux';
import logs from '../logs';
import DataFlagTransformer from '../../helpers/dataparse';

/**
 * LogsList class extending the superClass Logs
 */
export default class LogsList extends logs {
  /**
     * @param string
     * Description of the command Logs:list
     */
  static description = 'List logs ressource';

  /**
     * @param object
     * Declaration of the command flags
    */
  static flags = {
    ...logs.flags,
    limit: flags.integer({
      char: 'l',
      description: 'Limit the list of logs to display',
      default: 10,
    }),
    filter: flags.string({
      char: 'f',
      description: 'filter the list',
      multiple: true,
    }),
    help: flags.help({char: 'h'}),
  };

  /**
   * @param string[]
   * some examples of the logs:list use for help
   */
  static examples = [
    'logs:list',
    'logs:list --limit=5',
    'logs:list --date=date',
    'logs:list --method=GET',
    'logs:list --status=200',
    'logs:list --path=0',
  ];

  async run() {
    /**
     *  Get flags object from LogsList
     *  and use them to retrieve and list logs
     */
    /**
     * @param object
     * get flags value
     */
    const {flags} = this.parse(LogsList);

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
     * store the number of logs to display
     */
    const limit = flags.limit;

    const filter = DataFlagTransformer.transformFiltersForES(flags.filter);

    /**
     * Set Apikey and environment to connect to fedapay
     */
    FedaPay.setApiKey(apiKey);
    FedaPay.setEnvironment(environment);

    try {
      cli.action.start('Getting the customers list');

      const filt = {
        per_page: limit,
        ...filter,
        match: 'must',

      };
      // eslint-disable-next-line no-console
      console.log(filt);
      const Logs = await Log.all(filt);
      this.log(colorize(JSON.stringify(Logs, null, 2)));
    } catch (error) {
      this.warn(chalk.red(`${error.name} : ${error.message}`));
    }

    cli.action.stop();
  }
}
