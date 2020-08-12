import { flags } from '@oclif/command';
import { FedaPay, Customer } from 'fedapay';
import colorize from 'json-colorizer';
import { cli } from 'cli-ux';
import Customers from '../customers';
import DataFlagTransformer from '../../helpers/dataparse';

/**
 * CustomersList class extending the superClass Customers
 */
export default class CustomersList extends Customers {
  /**
   * @param string
   * Description of the command Custommers:list description
   */
  static description = 'List of the customer records.';

  /**
   * @param object
   * Declaration of the command flags
  */
  static flags = {
    ...Customers.flags,
    limit: flags.integer({
      char: 'l',
      description: 'Limit of records to display.',
      default: 10,
    }),
    filters: flags.string({
      char: 'f',
      description: 'Filter the list of customers.',
      multiple: true,
    }),
    page: flags.integer({
      description: 'The page of the records to display.',
      char: 'p',
      default: 1
    }),
    help: flags.help({ char: 'h', description: 'Help for customers:list' })
  };

  /**
   * @param string[]
   * some examples of the custommers list use for help
   */
  static examples = [
    'customers:list',
    'customers:list --api-key=[API-KEY] --environment=[env] --limit=20',
    'customers:list --api-key=[API-KEY] --environment=[env] -p=2',
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
    const { flags } = this.parse(CustomersList);

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

    try {
      cli.action.start('Getting the customers list');

      const customers = await Customer.all({ per_page: limit, page, ...filters });
      this.log(colorize(JSON.stringify(customers, null, 2)));
    } catch (error) {
      this.error(error.message);
    }

    cli.action.stop();
  }
}
