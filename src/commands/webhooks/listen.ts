import { flags } from '@oclif/command';
import cli from 'cli-ux';
import { FedaPay, Webhook } from 'fedapay';
import colorize  from 'json-colorizer';
import URL from 'url';
import chalk from 'chalk';
import ngrok from 'ngrok';
import Webhooks from '../webhooks';
import DataFlagtransformer from '../../helpers/dataparse';

/*
 * WebhookListen Class extending the superClass Webhooks
 */
export default class WebhooksListen extends Webhooks {
  /**
   * @params String
   * Description of the command webhooks:create
   */
  static description = 'Listen a new webhook and forward event to a local url'

  /**
   * The command usage
   * @var string
   */
  static usage = 'webhooks:listen [options]';
  /**
   * @params Object
   * Insertion of the different commands flags
   */
  static flags = {
    ...Webhooks.flags,
    url: flags.string({
      char: 'u',
      description: 'Forward url',
      required: true
    }),
    log: flags.boolean({ description: 'Log request output', default: false }),
    help: flags.help({ char: 'h', description: 'Help for webhooks:create.' })
  }

  /**
   * @param Sting[]
   * Some example of use of the webhook:create command
   */
  static examples = [
    'webhooks:listen --api-key=[API-KEY] --environment=[env] --url=http://localhost:8080/webhooks',
  ];

  private webhook: Webhook | null = null;

  private async deleteWebhook() {
    if (this.webhook) {
      await this.webhook.delete();
    }
  }

  private isLocalNetwork(hostname: string) {
    return (
      (['localhost', '127.0.0.1', '', '::1'].includes(hostname))
      || (hostname.startsWith('192.168.'))
      || (hostname.startsWith('10.0.'))
      || (hostname.endsWith('.local'))
    )
  }

  async run() {
    /**
     * @param object
     * get flags value
     */
    const { flags } = this.parse(WebhooksListen);
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
     * @param string
     * The data obtained after transformation
     */
    const url = flags.url;
    /**
     * Set Apikey and environment to connect to fedapay
     */
    FedaPay.setApiKey(apiKey);
    FedaPay.setEnvironment(environment);

    try {
      const parsedUrl = URL.parse(url);

      // We only process local url
      if (!this.isLocalNetwork(parsedUrl.hostname || '')) {
        throw new Error('Please use a local url');
      }

      const port = parseInt(parsedUrl.port || '8080');
      let proxyUrl = await ngrok.connect({
        port,
        onStatusChange: status => {
          if (status === 'closed') {
            this.deleteWebhook();
          }
        },
        onLogEvent: data => {
          if(flags.log) {
            console.log(data);
          }
        },
      });

      proxyUrl += parsedUrl.path;

      cli.action.start('Creating webhook');
      this.webhook = await Webhook.create({ url: proxyUrl });

      this.log(chalk.green('Webhook created successfully! ') + chalk.bold(`Webhook ID: ${this.webhook.id}`));
      this.log(chalk.green(`Proxying ${url} ---> ${proxyUrl}`));

    } catch (error) {
      this.log('Oups something occured');
      this.error(error.message);
    }

    cli.action.stop();
  }
}
