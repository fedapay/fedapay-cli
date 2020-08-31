import { flags } from '@oclif/command';
import cli from 'cli-ux';
import { FedaPay, Transaction } from 'fedapay';
import colorize  from 'json-colorizer';
import chalk from 'chalk';
import Transactions from '../transactions';
import DataFlagtransformer from '../../helpers/dataparse';

/*
 * TransactionCreate Class extending the superClass Transactions
 */
export default class TransactionsCreate extends Transactions {
  /**
   * @params String
   * Description of the command transactions:create
   */
  static description = 'Create a new transaction.'

  /**
   * The command usage
   * @var string
   */
  static usage = 'transactions:create [options]';
  /**
   * @params Object
   * Insertion of the different commands flags
   */
  static flags = {
    ...Transactions.flags,
    data: flags.string({
      char: 'd',
      description: 'Data for the API request.',
      required: true,
      multiple: true,
    }),
    'with-token': flags.boolean({
      description: 'add the token to your transactions.',
      default: false,
    }),
    help: flags.help({ char: 'h', description: 'Help for transactions:create.' })
  }

  /**
   * @param Sting[]
   * Some example of use of the transaction:create command
   */
  static examples = [
    'transactions:create --api-key=[API-KEY] --environment=[env] -d amount=2500 -d description="Sending money to mum" -d currency[iso]=XOF -d customer[email]=john.doe@example.com',
    'transactions:create --api-key=[API-KEY] --environment=[env] --with-token -d amount=2500 -d description="Sending money to mum" -d currency[iso]=XOF -d customer[email]=john.doe@example.com'
  ]

  async run() {
    /**
     * @param object
     * get flags value
     */
    const { flags } = this.parse(TransactionsCreate);
    /**
    * @param String
    * your api's key
    */
    const apiKey = this.userConfig.read('secret_key', flags['api-key']);
    /**
     * @param String
     * sandbox or live
     */
    const environment = this.userConfig.read('environment', flags.environment);
    /**
     * @param Object
     * The data obtained after transformation
     */
    const data = DataFlagtransformer.transform(flags.data);
    /**
     * Set Apikey and environment to connect to fedapay
     */
    FedaPay.setApiKey(apiKey);
    FedaPay.setEnvironment(environment);

    try {
      /**
       * @param Transaction
       * Created transaction
       */
      cli.action.start('Retrive transaction');
      const transaction = await Transaction.create(data);
      this.log(chalk.green('Transaction created successfully!'));
      this.log(colorize(JSON.stringify(transaction, null, 2)));

      if (flags['with-token']) {
        /**
         * @param Object
         * Your token
         */
        cli.action.start('Generating transaction token');
        const token = await transaction.generateToken();
        this.log(chalk.bold.italic('Your token is : '));
        this.log(colorize(JSON.stringify(token, null, 2)));
      }
    } catch (error) {
      this.log('Oups something occured');
      this.error(error.message);
    }

    cli.action.stop();
  }
}
