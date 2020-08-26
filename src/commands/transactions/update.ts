import { flags } from '@oclif/command';
import { FedaPay, Transaction } from 'fedapay';
import colorize from 'json-colorizer';
import cli from 'cli-ux';
import Transactions from '../transactions';
import DataFlagtransformer from '../../helpers/dataparse';

/**
 * TransactionUpdate extending the superClass Transactions
 */
export default class TransactionsUpdate extends Transactions {
  /**
  * @params String
  * Description of the command transactions:update
  */
  static description = 'Update a transaction.';

  /**
   * @param object
   * Declaration of the command flags
  */
  static flags = {
    ...Transactions.flags,
    id: flags.integer({
      required: true,
      description: 'The transaction ID.'
    }),
    data: flags.string({
      description: 'Data for the API request.',
      required: true,
      multiple: true,
      char: 'd',
    }),
    help: flags.help({ char: 'h', description: 'Help for transactions:update command.' }),
  };

  /**
   * @param Sting[]
   * Some example of use of the transaction:update command
   */
  static examples = [
    'transactions:update --api-key=[API-KEY] --environment=[env] --id=[ID] -d amount=2500',
    'transactions:update --api-key=[API-KEY] --environment=[env] --id=[ID] -d amount=1780 -d customer[email]=geronimo@apache.com'
  ];

  async run() {
    /**
     * @param object
     * get flags value
     */
    const { flags } = this.parse(TransactionsUpdate);

    /**
     * @param String
     * your api's key
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

    try {
      /**
      * @param integer
      * get the id of the transaction
      */
      const id = flags.id;

      /**
       * @param Object
       * The data obtained after transformation
       */
      const data = DataFlagtransformer.transform(flags.data);

      cli.action.start('Updating transaction');
      const transaction = await Transaction.update(id, data);
      this.log(colorize(JSON.stringify(transaction, null, 2)));
    } catch (error) {
      this.error(error.message);
    }
  }
}
