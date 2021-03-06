import { flags } from '@oclif/command';
import { FedaPay, Transaction } from 'fedapay';
import cli from 'cli-ux';
import chalk from 'chalk';
import Transactions from '../transactions';

/**
 * TransactionDelete class extending super class Transactions
 */
export default class TransactionsDelete extends Transactions {
  /**
  * @params String
  * Description of the command transactions:delete
  */
  static description = 'Delete a transaction.'

  /**
   * The command usage
   * @var string
   */
  static usage = 'transactions:delete [options]';

  /**
  * @param object
  * Declaration of the command flags
 */
  static flags = {
    ...Transactions.flags,
    id: flags.integer({
      description: 'The transaction ID.',
      required: true,
    }),
    confirm: flags.boolean({
      description: 'Skip the warning prompt and automatically confirm the command being entered.',
      default: false,
      char: 'c'
    }),
    help: flags.help({ char: 'h', description: 'Help for transactions:delete.' }),
  }

  /**
   * @param String[]
   * Some example of use of the delete command
   */
  static examples = [
    'transactions:delete --api-key=[api_key] --environment=[env] --id=[ID]',
    'transactions:delete --api-key=[api_key] --environment=[env] --id=[ID] -c',
  ]

  async run() {
    /**
     * @param object
     * get flags value
     */
    const { flags } = this.parse(TransactionsDelete);
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
      /**
       * @param Transaction
       * result of the retrieve
       */
      cli.action.start('Retrieving transaction');
      const transaction = await Transaction.retrieve(id);
      const confirm = flags.confirm || await cli.confirm(
        'Are you sure to continue? [Y/n]'
      );

      if (confirm) {
        cli.action.start('Deleting transaction');
        await transaction.delete();
        this.log(chalk.green('Transaction deleted successfully.'));
      } else {
        this.log(chalk.yellow('Deletion canceled.'));
      }
    } catch (error) {
      this.error(error.message);
    }

    cli.action.stop();
  }
}
