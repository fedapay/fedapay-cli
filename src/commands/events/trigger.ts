import { flags } from '@oclif/command';
import { FedaPay, Webhook } from 'fedapay';
import { cli } from 'cli-ux';
import Command from '../../base';

/**
 * EventsTrigger class extending super class Events
 */
export default class EventsTrigger extends Command {
  /**
  * @params String
  * Description of the command webhooks:token
  */
  static description = 'Trigger an event to a webhook.';

  /**
   * The command usage
   * @var string
   */
  static usage = 'events:trigger [options]';

  /**
   * @param object
   * Declaration of the command flags
   */
  static flags = {
    ...Command.flags,
    webhook: flags.integer({
      required: true,
      description: 'ID of the webhook.'
    }),
    event: flags.string({
      required: true,
      description: 'The event name to trigger'
    }),
    help: flags.help({ char: 'h', description: 'Help for events:sub command.' }),
  };

  /**
   * @param String[]
   * Some example with the token command
   */
  static examples = [
    'events:token --api-key=[API-KEY] --environment=[env] --event=[ressource.name]',
  ];

  async run() {
    /**
     * @param object
     * get flags value
     */
    const { flags } = this.parse(EventsTrigger);

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
    const webhookId = flags.webhook;

    /**
     * @param integer
     * get the event to trigger
     */
    const event = flags.event;

    try {
      cli.action.start('Retrieve webhook');

      const webhook = await Webhook.retrieve(webhookId);

      /**
       * @param Event
       * When we got a match the variable is filled up with a webhook object
       */
      const data = await webhook.sendEvent({ event });

      this.log('Event send');
    } catch (error) {
      this.log(error.message);
    }
  }
}
