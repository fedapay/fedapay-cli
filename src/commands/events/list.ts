import { flags } from '@oclif/command';
import cli from 'cli-ux';
import { FedaPay, Event } from 'fedapay';
import colorize from 'json-colorizer';
import Events from '../events';
import { boolean } from '@oclif/command/lib/flags';

/**
 * EventsList class extending super class Events
 */
export default class EventsList extends Events {
  static description = 'List of the events'

  static flags = {
    ...Events.flags,
    limit:flags.integer({
      description:'Limit of the records to display',
      default:10,
    }),
    type:flags.string({
      description:'Type of the events you want to display',
    }),
    date:flags.string({
      description:'Display events occured a that speficic date',
    }),
    methods:flags.string({
      description:'The method you want to use',
    }),
    path:flags.string({
      description:'Display record for a specific path',
    }),
    help: flags.help({char: 'h', description:'Help for events:list command'}),
  }

  /**
   * @param Sting[]
   * Some example of use of the transaction:list command
   */
  static examples = [
    'events:list --api-key=[api_key] --environment=environment --limit=15'
  ];


  async run() {
     /**
     * @param object
     * get flags value
     */
    const {flags} = this.parse(EventsList)
     /**
    * @param String
    * your api's key
    */
   const apiKey = flags['api-key'];

   /**
    * @param String
    * environment or live
    */
   const environment = flags.environment;

   /**
    * @param integer
    * get the limit value
    */
   const limit = flags.limit;

  


  }
}