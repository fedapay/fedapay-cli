import { flags } from '@oclif/command';
import { FedaPay, Transaction } from 'fedapay';
import colorize from 'json-colorizer';
import { cli } from 'cli-ux';
import Transactions from '../transactions';

/**
 * TransactionRetrieve class extending super Class Transactions
 */
export default class TransactionsRetrieve extends Transactions {
  /**
  * @params String
  * Description of the command transactions:retrieve
  */
  static description = 'Retrieve a transaction.'

  /**
   * @param object
   * Declaration of the command flags
   */
  static flags = {
    ...Transactions.flags,
    id: flags.integer({
      required: true,
      description: 'ID of the transaction.'
    }),
    help: flags.help({ char: 'h', description: 'Help for transactions:retrieve command.' }),
  };

  /**
   * @param String
   * Some example with the retrieve command
   */
  static examples = [
    'transactions:retrieve --api-key=[API-KEY] --environment=[env] --id=[ID]'
  ];

  async run() {
    /**
      * @param object
      * get flags value
      */
    const { flags } = this.parse(TransactionsRetrieve);

    /**
    * @param String
    * your api's key
    */
    const apiKey = flags['api-key'];

    /**
     * @param String
     * sandbox or live
     */
    const environment = flags.environment;

    /**
     * Set Apikey and environment to connect to fedapay
     */
    FedaPay.setApiKey(apiKey);
    FedaPay.setEnvironment(environment);
    /**
     * @param integer
     * get the id of the transaction
     */
    const id = flags.id;

    try {
      cli.action.start('Retrieve transaction');

      const transaction = await Transaction.retrieve(id);
      this.log(colorize(JSON.stringify(transaction, null, 2)));
    } catch (error) {
      this.error(error.message);
    }
  }
}

