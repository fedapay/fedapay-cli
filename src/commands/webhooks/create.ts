import { flags } from '@oclif/command';
import cli from 'cli-ux';
import { FedaPay, Webhook } from 'fedapay';
import colorize  from 'json-colorizer';
import chalk from 'chalk';
import Webhooks from '../webhooks';
import DataFlagtransformer from '../../helpers/dataparse';

/*
 * WebhookCreate Class extending the superClass Webhooks
 */
export default class WebhooksCreate extends Webhooks {
  /**
   * @params String
   * Description of the command webhooks:create
   */
  static description = 'Create a new webhook.'

  /**
   * The command usage
   * @var string
   */
  static usage = 'webhooks:create [options]';
  /**
   * @params Object
   * Insertion of the different commands flags
   */
  static flags = {
    ...Webhooks.flags,
    data: flags.string({
      char: 'd',
      description: 'Data for the API request.',
      required: true,
      multiple: true,
    }),
    help: flags.help({ char: 'h', description: 'Help for webhooks:create.' })
  }

  /**
   * @param Sting[]
   * Some example of use of the webhook:create command
   */
  static examples = [
    'webhooks:create --api-key=[API-KEY] --environment=[env] -d url=https://example.com/webhooks',
  ]

  async run() {
    /**
     * @param object
     * get flags value
     */
    const { flags } = this.parse(WebhooksCreate);
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
       * @param Webhook
       * Created webhook
       */
      cli.action.start('Retrieve webhook');
      const webhook = await Webhook.create(data);
      this.log(chalk.green('Webhook created successfully!'));
      this.log(colorize(JSON.stringify(webhook, null, 2)));

    } catch (error) {
      this.log('Oups something occured');
      this.error(error.message);
    }

    cli.action.stop();
  }
}
