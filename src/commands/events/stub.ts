import { flags } from '@oclif/command';
import { FedaPay, Webhook } from 'fedapay';
import colorize from 'json-colorizer';
import { cli } from 'cli-ux';
import Command from '../../base';

/**
 * EventsStubEvent class extending super class Events
 */
export default class EventsStub extends Command {
  /**
  * @params String
  * Description of the command webhooks:token
  */
  static description = 'Generate a payment token for a webhook.';

  /**
  * The command usage
  * @var string
  */
  static usage = 'events:stub [options]';

  /**
   * @param object
   * Declaration of the command flags
   */
  static flags = {
    ...Command.flags,
    event: flags.string({
      required: true,
      description: 'The event name to stub'
    }),
    help: flags.help({ char: 'h', description: 'Help for events:sub command.' }),
  };

  /**
   * @param String[]
   * Some example with the token command
   */
  static examples = [
    'events:stub --api-key=[API-KEY] --environment=[env] --event=[ressource.name]',
  ];

  async run() {
    /**
    * @param object
    * get flags value
    */
    const { flags } = this.parse(EventsStub);

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
     * get the event to stub
     */
    const event = flags.event;

    try {
      cli.action.start('Loading');

      /**
       * @param Event
       * When we got a match the variable is filled up with a webhook object
       */
      const data = await Webhook.stubEvent({ event });

      this.log(colorize(JSON.stringify(data, null, 2)));
    } catch (error) {
      this.log(error.message);
    }
  }
}
