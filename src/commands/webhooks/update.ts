import { flags } from '@oclif/command';
import { FedaPay, Webhook } from 'fedapay';
import colorize from 'json-colorizer';
import cli from 'cli-ux';
import Webhooks from '../webhooks';
import DataFlagtransformer from '../../helpers/dataparse';

/**
 * WebhookUpdate extending the superClass Webhooks
 */
export default class WebhooksUpdate extends Webhooks {
  /**
  * @params String
  * Description of the command webhooks:update
  */
  static description = 'Update a webhook.';

  /**
  * The command usage
  * @var string
  */
  static usage = 'webhooks:update [options]';

  /**
   * @param object
   * Declaration of the command flags
  */
  static flags = {
    ...Webhooks.flags,
    id: flags.integer({
      required: true,
      description: 'The webhook ID.'
    }),
    data: flags.string({
      description: 'Data for the API request.',
      required: true,
      multiple: true,
      char: 'd',
    }),
    help: flags.help({ char: 'h', description: 'Help for webhooks:update command.' }),
  };

  /**
   * @param Sting[]
   * Some example of use of the webhook:update command
   */
  static examples = [
    'webhooks:update --api-key=[API-KEY] --environment=[env] --id=[ID] -d url=https://example.com/webhooks',
  ];

  async run() {
    /**
     * @param object
     * get flags value
     */
    const { flags } = this.parse(WebhooksUpdate);

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
      * get the id of the webhook
      */
      const id = flags.id;

      /**
       * @param Object
       * The data obtained after transformation
       */
      const data = DataFlagtransformer.transform(flags.data);

      cli.action.start('Updating webhook');
      const webhook = await Webhook.update(id, data);
      this.log(colorize(JSON.stringify(webhook, null, 2)));
    } catch (error) {
      this.error(error.message);
    }
  }
}
