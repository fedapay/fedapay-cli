import { flags } from '@oclif/command';
import cli from 'cli-ux';
import { FedaPay, Webhook } from 'fedapay';
import colorize from 'json-colorizer';
import Webhooks from '../webhooks';
import DataFlagTransformer from '../../helpers/dataparse';

/**
 * WebhookList class extending superClass Webhooks
 */
export default class WebhooksList extends Webhooks {
  /**
  * @params String
  * Description of the command webhooks:list
  */
  static description = 'List of the webhook records.';

  /**
    * The command usage
    * @var string
    */
  static usage = 'webhooks:list [options]';

  /**
   * @param object
   * Declaration of the command flags
   */
  static flags = {
    ...Webhooks.flags,
    limit: flags.integer({
      description: 'Limit of records to display.',
      char: 'l',
      default: 10,
    }),
    page: flags.integer({
      description: 'The page of the records to display.',
      char: 'p',
      default: 1
    }),
    filters: flags.string({
      char: 'f',
      description: 'Filter the list of webhooks.',
      multiple: true,
    }),
    help: flags.help({ char: 'h', description: 'Help for webhooks:list' })
  };

  /**
   * @param Sting[]
   * Some example of use of the webhook:list command
   */
  static examples = [
    'webhooks:list --api-key=[api_key] --environment=environment --limit=15'
  ];

  async run() {
    /**
     * @param object
     * get flags value
     */
    const { flags } = this.parse(WebhooksList);

    /**
    * @param String
    * your api's key
    */
    const apiKey = this.userConfig.read('secret_key', flags['api-key']);

    /**
     * @param String
     * environment or live
     */
    const environment = this.userConfig.read('environment', flags.environment);

    /**
     * @param integer
     * get the limit value
     */
    const limit = flags.limit;

    /**
     * @param integer
     * get the page number value
     */
    const page = flags.page;

    /**
     * @param Object
     * The filter flag
     * TODO: Use filter for the list
     */
    const filters = DataFlagTransformer.transformFilters(flags.filters);

    /**
     * Set Apikey and environment to connect to fedapay
     */
    FedaPay.setApiKey(apiKey);
    FedaPay.setEnvironment(environment);

    cli.action.start('Getting the webhooks list');
    const webhooks = await Webhook.all({
      per_page: limit, page, ...filters
    });

    this.log(colorize(JSON.stringify(webhooks, null, 2)));

    cli.action.stop();
  }
}
