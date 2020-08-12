import { flags } from '@oclif/command';
import { FedaPay, Customer } from 'fedapay';
import colorize from 'json-colorizer';
import cli from 'cli-ux';
import Customers from '../customers';
import DataFlagtransformer from '../../helpers/dataparse';

/**
 * CustomersUpdate class extending the superClass Customers
 */
export default class CustomersUpdate extends Customers {
  /**
   * @param string
   * Description of the command Custommers:update description
   */
  static description = 'Update a customer.';

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
    data: flags.string({
      description: 'Data for the API request.',
      required: true,
      char: 'd',
      multiple: true,
    }),
    help: flags.help({ char: 'h', description: 'Help for customers:update command.' }),
  };

  /**
   * @param string[]
   * some examples of the custommers update use for help
   */
  static examples = [
    'customers:update --api-key=[API-KEY] --environment=[env] --id=[ID] -d email=johndoe@zot.com',
    'customers:update --api-key=[API-KEY] --environment=[env] --id=[ID] -d email=johndoe@zot.com -d lastname=Doe',
  ];

  async run() {
    /**
     * @param object
     * get flags value
     */
    const { flags } = this.parse(CustomersUpdate);

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
     * store the customer id
     */
    const id = flags.id;

    /**
     * @param object
     * result of transforming flags.data into Typescript Object
     */
    const data = DataFlagtransformer.transform(flags.data);

    /**
     * Set Apikey and environment to connect to fedapay
     */
    FedaPay.setApiKey(apiKey);
    FedaPay.setEnvironment(environment);

    try {
      cli.action.start('Updating transaction');

      const customer = await Customer.update(id, data);
      this.log(colorize(JSON.stringify(customer, null, 2)));
    } catch (error) {
      this.error(error.message);
    }
  }
}
