import {flags} from '@oclif/command';
import { FedaPay, Log } from 'fedapay';
import Command from '../base';
import TailUtil from '../helpers/tail-util';
import DataFlagTransformer from '../helpers/dataparse';

/**
 * Logs class extending Command Class
 */
export default class Logs extends Command {
  /**
   * @param string
   * Description of the command Logs.
   */
  static description = 'Manage FedaPay logs';

  /**
   * @param string
   * Custom usage string for help
   * This overrides the default usage
   */
  static usage = 'logs:<operation> [parameters...]';

  /**
   * @param string[]
   * Examples to add to help.
   * Each can be multiline.
   */
  static examples = [
    'logs:list',
    'logs:retrieve --id=ID',
  ];

  /**
   * @param object
   * Declaration of the command flags.
  */
  static flags = {
    ...Command.flags,
    tail: flags.boolean({ char: 't', description: 'Tail logs', default: false }),
    filters: flags.string({
      char: 'f',
      description: 'Filter the list of logs to tail.',
      multiple: true,
    }),
    help: flags.help({char: 'h', description: 'Help for logs command.'}),
  };

  async run() {
    const { flags } = this.parse(Logs);

    /**
     * @param string
     * api key value
     */
    const apiKey = this.userConfig.read('secret_key', flags['api-key']);

    /**
     * @param string
     * environment type
     */
    const environment = this.userConfig.read('environment', flags.environment);

     /**
     * Set Apikey and environment to connect to fedapay
     */
    FedaPay.setApiKey(apiKey);
    FedaPay.setEnvironment(environment);

    const filters = DataFlagTransformer.transform(flags.filters);

    if (flags.tail) {
      const queueOptions = await Log.subscribe();
      const mqUrl = this.userConfig.read('mq_url');

      const tail = new TailUtil(mqUrl, queueOptions);
      tail.connect(filters, (output) => {
        this.log(output);
      });

      this.log('Waiting for logs...');
    } else {
      this._help();
    }
  }
}
