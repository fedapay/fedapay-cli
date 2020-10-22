import { flags } from '@oclif/command';
import cli from 'cli-ux';
import { FedaPay, Event } from 'fedapay';
import colorize from 'json-colorizer';
import Command from '../../base';

/**
 * EventsRetrieve class extending super class Events
 */
export default class EventsRetrieve extends Command {
  /**
   * @var string
   * Description of the command event:retrieve
   */
  static description = 'Retrieve an event thanks to its ID'

  /**
   * The command usage
   * @var string
   */
  static usage = 'events:retrieve [options]';

  /**
   * @var Object
   * Declaration of the command flag
   */
  static flags = {
    ...Command.flags,
    id: flags.string({
      description: 'The Id of the event to retrieve',
    }),
    help: flags.help({ char: 'h', description: 'Help for events:retrieve command' }),
  }

  /**
   * @param String
   * Some example with the events:retrieve command
   */
  static examples = [
    'events:retrieve --api-key=[API-KEY] --environment=[env] --id=[ID]',
  ]

  async run() {
    /**
     * @param object
     * get flags value
     */
    const { flags } = this.parse(EventsRetrieve);

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
     * @param string
     * Get the id of the event
     */
    const id = flags.id || '';

    try {
      cli.action.start('Retrieving event');

      const event = await Event.retrieve(id);
      this.log(colorize(JSON.stringify(event, null, 2)));
      cli.action.stop();
    } catch (error) {
      this.error(error.message);
    }
  }
}
