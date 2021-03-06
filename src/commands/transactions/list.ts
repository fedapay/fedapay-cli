import { flags } from '@oclif/command';
import cli from 'cli-ux';
import { FedaPay, Transaction } from 'fedapay';
import colorize from 'json-colorizer';
import Transactions from '../transactions';
import DataFlagTransformer from '../../helpers/dataparse';

/**
 * TransactionList class extending superClass Transactions
 */
export default class TransactionsList extends Transactions {
  /**
  * @params String
  * Description of the command transactions:list
  */
  static description = 'List of the transaction records.';

  /**
    * The command usage
    * @var string
    */
  static usage = 'transactions:list [options]';

  /**
   * @param object
   * Declaration of the command flags
   */
  static flags = {
    ...Transactions.flags,
    limit: flags.integer({
      description: 'Limit of records to display.',
      char: 'l',
      default: 10,
    }),
    page: flags.integer({
      description: 'The page of the records to display.',
      char: 'p',
      default: 1
    }),
    filters: flags.string({
      char: 'f',
      description: 'Filter the list of transactions.',
      multiple: true,
    }),
    help: flags.help({ char: 'h', description: 'Help for transactions:list' })
  };

  /**
   * @param Sting[]
   * Some example of use of the transaction:list command
   */
  static examples = [
    'transactions:list --api-key=[api_key] --environment=environment --limit=15'
  ];

  async run() {
    /**
     * @param object
     * get flags value
     */
    const { flags } = this.parse(TransactionsList);

    /**
    * @param String
    * your api's key
    */
    const apiKey = this.userConfig.read('secret_key', flags['api-key']);

    /**
     * @param String
     * environment or live
     */
    const environment = this.userConfig.read('environment', flags.environment);

    /**
     * @param integer
     * get the limit value
     */
    const limit = flags.limit;

    /**
     * @param integer
     * get the page number value
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

    cli.action.start('Getting the transactions list');
    const transactions = await Transaction.all({
      per_page: limit, page, ...filters
    });

    this.log(colorize(JSON.stringify(transactions, null, 2)));

    cli.action.stop();
  }
}
