import { flags } from '@oclif/command';
import { FedaPay, Webhook } from 'fedapay';
import colorize from 'json-colorizer';
import { cli } from 'cli-ux';
import Webhooks from '../webhooks';

/**
 * WebhookRetrieve class extending super Class Webhooks
 */
export default class WebhooksRetrieve extends Webhooks {
  /**
  * @params String
  * Description of the command webhooks:retrieve
  */
  static description = 'Retrieve a webhook.'

  /**
  * The command usage
  * @var string
  */
  static usage = 'webhooks:retrieve [options]';

  /**
   * @param object
   * Declaration of the command flags
   */
  static flags = {
    ...Webhooks.flags,
    id: flags.integer({
      required: true,
      description: 'ID of the webhook.'
    }),
    help: flags.help({ char: 'h', description: 'Help for webhooks:retrieve command.' }),
  };

  /**
   * @param String
   * Some example with the retrieve command
   */
  static examples = [
    'webhooks:retrieve --api-key=[API-KEY] --environment=[env] --id=[ID]'
  ];

  async run() {
    /**
      * @param object
      * get flags value
      */
    const { flags } = this.parse(WebhooksRetrieve);

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
     * get the id of the webhook
     */
    const id = flags.id;

    try {
      cli.action.start('Retrieve webhook');

      const webhook = await Webhook.retrieve(id);
      this.log(colorize(JSON.stringify(webhook, null, 2)));
    } catch (error) {
      this.error(error.message);
    }
  }
}
