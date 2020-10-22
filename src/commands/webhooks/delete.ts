import { flags } from '@oclif/command';
import { FedaPay, Webhook } from 'fedapay';
import cli from 'cli-ux';
import chalk from 'chalk';
import Webhooks from '../webhooks';

/**
 * WebhookDelete class extending super class Webhooks
 */
export default class WebhooksDelete extends Webhooks {
  /**
  * @params String
  * Description of the command webhooks:delete
  */
  static description = 'Delete a webhook.'

  /**
   * The command usage
   * @var string
   */
  static usage = 'webhooks:delete [options]';

  /**
  * @param object
  * Declaration of the command flags
 */
  static flags = {
    ...Webhooks.flags,
    id: flags.integer({
      description: 'The webhook ID.',
      required: true,
    }),
    confirm: flags.boolean({
      description: 'Skip the warning prompt and automatically confirm the command being entered.',
      default: false,
      char: 'c'
    }),
    help: flags.help({ char: 'h', description: 'Help for webhooks:delete.' }),
  }

  /**
   * @param String[]
   * Some example of use of the delete command
   */
  static examples = [
    'webhooks:delete --api-key=[api_key] --environment=[env] --id=[ID]',
    'webhooks:delete --api-key=[api_key] --environment=[env] --id=[ID] -c',
  ]

  async run() {
    /**
     * @param object
     * get flags value
     */
    const { flags } = this.parse(WebhooksDelete);
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
      /**
       * @param Webhook
       * result of the retrieve
       */
      cli.action.start('Retrieving webhook');
      const webhook = await Webhook.retrieve(id);
      const confirm = flags.confirm || await cli.confirm(
        'Are you sure to continue? [Y/n]'
      );

      if (confirm) {
        cli.action.start('Deleting webhook');
        await webhook.delete();
        this.log(chalk.green('Webhook deleted successfully.'));
      } else {
        this.log(chalk.yellow('Deletion canceled.'));
      }
    } catch (error) {
      this.error(error.message);
    }

    cli.action.stop();
  }
}
