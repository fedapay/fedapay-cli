import { flags } from '@oclif/command';
import { FedaPay, Customer } from 'fedapay';
import colorize from 'json-colorizer';
import { cli } from 'cli-ux';
import Customers from '../customers';

/**
 * CustomersRetrieve class extending the superClass Customers
 */
export default class CustomersRetrieve extends Customers {
  /**
   * @param string
   * Description of the command Customer:retrieve
  */
  static description = 'Retrieve a customer.'

  /**
   * @param object
   * Declaration of the command flags
  */
  static flags = {
    ...Customers.flags,
    id: flags.integer({
      description: 'ID of the customer.',
      required: true,
    }),
    help: flags.help({ char: 'h', description: 'Help for customers:retrieve command.' })
  };

  /**
   * @param string
   * Set the command usage for help
   */
  static usage = 'customers:retrieve [options]';

  /**
   * @param string[]
   * some examples of the custommers retrieve use for help
   */
  static examples = [
    'customers:retrieve --api-key=[API-KEY] --environment=[env] --id=5'
  ];

  async run() {
    /**
      *  Get flags object from CustommersRetrieve
      *  and use them to retrieve an custommer
    /**
     * @param object
     * get flags value
     */
    const { flags } = this.parse(CustomersRetrieve);

    /**
     * @param string
     * api key value
     */
    const apiKey = this.userConfig.read('secret_key', flags['api-key']);

    /**
     * @param string
     * environment type
     */
    const environment = this.userConfig.read('environment', flags.environment);

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

    try {
      cli.action.start('Retrieve customer');

      const customer = await Customer.retrieve(id);
      this.log(colorize(JSON.stringify(customer, null, 2)));
    } catch (error) {
      this.error(error.message);
    }

    cli.action.stop();
  }
}
