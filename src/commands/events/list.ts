import { flags } from '@oclif/command';
import cli from 'cli-ux';
import { FedaPay, Event } from 'fedapay';
import colorize from 'json-colorizer';
import DataFlagTransformer from '../../helpers/dataparse';
import Events from '../events';

/**
 * EventsList class extending super class Events
 */
export default class EventsList extends Events {
  /**
   * @var String
   * Description of the command events:list
   */
  static description = 'List of the events'

  /**
 * The command usage
 * @var string
 */
  static usage = 'events:list [options]';

  /**
   * @param Object
   * Declaration of the command flags
   */
  static flags = {
    ...Events.flags,
    limit: flags.integer({
      description: 'Limit of the records to display',
      default: 10,
    }),
    filters: flags.string({
      description: 'Filters you want to apply',
      multiple: true,
      char: 'f',
    }),
    help: flags.help({ char: 'h', description: 'Help for events:list command' }),
  }

  /**
   * @param Sting[]
   * Some example of use of the events:list command
   */
  static examples = [
    'events:list --api-key=[api_key] --environment=environment --limit=15',
    'events:list --api-key=[api_key] --environment=environment --limit=15 -f type=transaction_deleted -f object_id=ID'
  ];

  async run() {
    /**
    * @param object
    * Get flags value
    */
    const { flags } = this.parse(EventsList);

    /**
   * @param String
   * Your API's key
   */
    const apiKey = this.userConfig.read('secret_key', flags['api-key']);

    /**
   * @param string
   * environment type
   */

    const environment = this.userConfig.read('environment', flags.environment);

    /**
     *  Set Apikey and environment to connect to fedapay
     */
    FedaPay.setApiKey(apiKey);
    FedaPay.setEnvironment(environment);

    /**
     * @param integer
     * Get the limit value
     */
    const limit = flags.limit;

    /**
     * @param Object
     * The filter flag
     */
    const filters = DataFlagTransformer.transformFilterForES(flags.filters);

    try {
      cli.action.start('Getting the transactions list');

      /**
       * @var Event,
       * Result of the filtered listing
       */
      const events = await Event.all({
        per_page: limit,
        ...filters,
        match: 'must',
      });

      this.log(colorize(JSON.stringify(events, null, 2)));

      cli.action.stop();
    } catch (error) {
      this.error(error.message);
    }
  }
}
