import { flags } from '@oclif/command';
import cli from 'cli-ux';
import { FedaPay, Transaction } from 'fedapay';
import colorize from 'json-colorizer';
import Transactions from '../transactions';

/**
 * TransactionList class extending superClass Transactions
 */
export default class TransactionsList extends Transactions {
  /**
  * @params String
  * Description of the command transactions:list
  */
  static description = 'List of the transactions ressources';

  /**
   * @param object
   * Declaration of the command flags
   */
  static flags = {
    ...Transactions.flags,
    limit: flags.integer({
      description: 'Limit of records to display.',
      default: 10,
    }),
    page: flags.integer({
      description: 'The page of the records to display.',
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
    const apiKey = flags['api-key'];

    /**
     * @param String
     * environment or live
     */
    const environment = flags.environment;

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
     * Set Apikey and environment to connect to fedapay
     */
    FedaPay.setApiKey(apiKey);
    FedaPay.setEnvironment(environment);

    cli.action.start('Getting the transactions list...');
    const transactions = await Transaction.all({ per_page: limit, page: page });

    this.log(colorize(JSON.stringify(transactions, null, 2)));

    cli.action.stop();
  }
}
