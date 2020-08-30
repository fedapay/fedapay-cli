import {flags} from '@oclif/command';
import {FedaPay, Customer} from 'fedapay';
import colorize from 'json-colorizer';
import { cli } from 'cli-ux';
import Customers from '../customers';
import DataFlagtransformer from '../../helpers/dataparse';

/**
 * CustomersCreate class extending the superClass Customers
 */
export default class CustomersCreate extends Customers {
  /**
   * @param string
   * Description of the command Customer:create
  */
  static description = 'Create a new customer.';

  /**
   * @param object
   * Declaration of the command flags
  */
  static flags = {
    ...Customers.flags,
    data: flags.string({
      description: 'Data for the API request.',
      required: true,
      char: 'd',
      multiple: true
    }),
    help: flags.help({ char: 'h', description: 'Help for customers:create.' })
  };

  /**
   * @param string
   * Set the command usage for help
   */
  static usage = 'customers:create [options]';

  /**
   * @param string[]
   * some examples of the custommers create use for help
   */
  static examples = [
    'customers:create --api-key=[API-KEY] --environment=[env] -d firstname=John -d lastname=Doe -d email=customertest1@tom.com -d phone_number[number]=68452896 -d phone_number[country]=BJ'
  ];

  async run() {
    /**
     * @param object
     * get flags value
     */
    const {flags} = this.parse(CustomersCreate);

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
      cli.action.start('Creating customer');

      const customer = await Customer.create(data);
      this.log(colorize(JSON.stringify(customer, null, 2)));
    } catch (error) {
      this.error(error.message);
    }

    cli.action.stop();
  }
}
