import { flags } from '@oclif/command';
import { FedaPay, Event } from 'fedapay';
import Command from '../base';
import TailUtil from '../helpers/tail-util';
import DataFlagTransformer from '../helpers/dataparse';

/**
 * The base class of events commands
 */
export default class Events extends Command {
  /**
   * The command description
   * @var string
   */
  static description = 'Here you can manage events';

  /**
 * The command usage
 * @var string
 */
  static usage = 'events:<operation> [parameters...]';

  /**
   * The command flags
   * @var Object
   */
  static flags = {
    ...Command.flags,
    tail: flags.boolean({ char: 't', description: 'Tail events', default: false }),
    dump: flags.boolean({ char: 'd', description: 'Dump event details', default: false }),
    filters: flags.string({
      char: 'f',
      description: 'Filter the list of event to tail.',
      multiple: true,
    }),
    help: flags.help({ char: 'h', description: 'Help for events command' }),
  }

  async run() {
    const { flags } = this.parse(Events);

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
      const queueOptions = await Event.subscribe();
      const mqUrl = this.userConfig.read('mq_url');

      const tail = new TailUtil(mqUrl, queueOptions);
      const keys = flags.dump ? [] : ['name', 'object'];
      tail.connect(filters, keys, (output) => {
        this.log(output);
      });

      this.log('Waiting for events...');
    } else {
      this._help();
    }
  }
}
