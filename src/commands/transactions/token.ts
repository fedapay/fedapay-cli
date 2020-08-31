import { flags } from '@oclif/command';
import { FedaPay, Transaction } from 'fedapay';
import colorize from 'json-colorizer';
import { cli } from 'cli-ux';
import chalk from 'chalk';
import Transactions from '../transactions';

/**
 * TransactionToken class extending super class Transactions
 */
export default class TransactionsToken extends Transactions {
  /**
  * @params String
  * Description of the command transactions:token
  */
  static description = 'Generate a payment token for a transaction.';

  /**
  * The command usage
  * @var string
  */
  static usage = 'transactions:token [options]';

  /**
  * @param object
  * Declaration of the command flags
 */
  static flags = {
    ...Transactions.flags,
    id: flags.integer({
      required: true,
      description: 'The transaction ID'
    }),
    help: flags.help({ char: 'h', description: 'Help for transactions:token command.' }),
  };

  /**
   * @param String[]
   * Some example with the token command
   */
  static examples = [
    'transactions:token --api-key=[API-KEY] --environment=[env] --id=[ID]',
  ];

  async run() {
    /**
    * @param object
    * get flags value
    */
    const { flags } = this.parse(TransactionsToken);

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

    /**
     * @param integer
     * get the id of the transaction
     */
    const id = flags.id;

    try {
      cli.action.start('Retrieve Transaction');

      /**
        * @param Transaction
        * When we got a match the variable is filled up with a transaction object
        */
      const transaction = await Transaction.retrieve(id);

      cli.action.start('Generating transaction token');

      const token = await transaction.generateToken();
      this.log(chalk.bold.italic('Your token is : '));
      this.log(colorize(JSON.stringify(token, null, 2)));
    } catch (error) {
      this.log(error.message);
    }
  }
}

