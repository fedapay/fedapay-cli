import {flags} from '@oclif/command';
import {FedaPay, Log} from 'fedapay';
import colorize from 'json-colorizer';
import { cli } from 'cli-ux';
import chalk from 'chalk';
import Logs from '../logs';
/**
 * LogsRetrieve class extending the superClass Logs
 */
export default class LogsRetrieve extends Logs {
  /**
   * @param string
   * Description of the command logs:retrieve
  */
  static description = 'Retrieve a log';

  /**
   * @param object
   * Declaration of the command flags
  */
  static flags = {
    ...Logs.flags,
    id: flags.string({
      description: 'ID of the customer.',
      required: true,
    }),
    help: flags.help({
      char: 'h',
      description: 'Help for logs:retrieve command.'
    }),
  };

  /**
   * @param string[]
   * some examples of the logs retrieve use for help
   */
  static examples = [
    'logs:retrieve --api-key=[API_KEY] --environment=sandbox --id=5',
    'logs:retrieve --api-key=[API_KEY] --environment=sandbox --id=1',
  ];

  async run() {
    /**
     * @param object
     * get flags value
     */
    const {flags} = this.parse(LogsRetrieve);

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
     * store the log id
     */
    const id = flags.id;

    /**
     * Set Apikey and environment to connect to fedapay
     */
    FedaPay.setApiKey(apiKey);
    FedaPay.setEnvironment(environment);

    try {
      cli.action.start('Retrieve log');

      const log = await Log.retrieve(id);
      this.log(colorize(JSON.stringify(log, null, 2)));
    } catch (error) {
      this.error(chalk.red.italic(`${error.name} : ${error.message}`));
    }

    cli.action.stop();
  }
}
