import { flags } from '@oclif/command';
import { FedaPay, Customer } from 'fedapay';
import Customers from '../customers';
import cli from 'cli-ux';
import chalk from 'chalk';

/**
 * CustomersDelete class extending the superClass Customers
 */
export default class CustomersDelete extends Customers {
  /**
   * @param string
   * Description of the command Customer:delete
  */
  static description = 'Delete a customer.';

  /**
   * @param object
   * Declaration of the command flags
  */
  static flags = {
    ...Customers.flags,
    id: flags.integer({
      description: 'The customer ID.',
      required: true
    }),
    confirm: flags.boolean({
      description: 'Skip the warning prompt and automatically confirm the command being entered.',
      char: 'c',
      default: false
    }),
    help: flags.help({ char: 'h', description: 'Help for customers:delete.' }),
  };

  /**
   * @param string
   * Set the command usage for help
   */
  static usage = 'customers:delete [options]';

  /**
   * @param string[]
   * some examples of the custommers delete use for help
   */
  static examples = [
    'customers:delete --api-key=[API-KEY] --environment=[env] --id=[ID]',
    'customers:delete --api-key=[API-KEY] --environment=[env] --id=[ID] -c',
  ];

  async run() {
    /**
     * @param object
     * get flags value
     */
    const { flags } = this.parse(CustomersDelete);

    /**
     * @param string
     * api key value
     */
    const apiKey = this.userConfig.read('secret_key', flags['api-key']);

    /**
     * @param string
     * environment type
     */
    const environment  = this.userConfig.read('environment', flags.environment);

    /**
     * @param number
     * store the customer id
     */
    const id = flags.id;

    /**
     * Set Apikey and environment to connect to fedapay
     */
    FedaPay.setApiKey(apiKey);
    FedaPay.setEnvironment(environment);

    /**
     * @param boolean
     * true if the user set the --confirm flag or input yes in the terminal
     */
    const confirm = flags.confirm || await cli.confirm(
      'Are you sure to continue? [Y/n]'
    );
    if (confirm) {
      try {
        cli.action.start('Retrieving customer');
        const customer = await Customer.retrieve(id);

        cli.action.start('Deleting customer');
        customer.delete();
        this.log(chalk.green('Customer delected successfully.'));
      } catch (error) {
        this.error(error.message);
      }
    } else {
      this.log(chalk.yellow('Deletion canceled.'));
    }

    cli.action.stop();
  }
}
