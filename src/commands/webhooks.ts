/* eslint-disable lines-between-class-members */
import { flags } from '@oclif/command';
import Command from '../base';

/**
 * The base class of Webhooks commands
 */
export default class Webhooks extends Command {
  /**
   * The command descrition
   * @var string
   */
  static description = 'Manage FedaPay Webhook ressources';

  /**
   * The command usage
   * @var string
   */
  static usage = 'Webhooks:<operation> [parameters...]';

  /**
   * The command flags
   * @var Object
   */
  static flags = {
    ...Command.flags,
    help: flags.help({ char: 'h', description: 'Help for Webhooks command.' }),
  }

  async run() {
    this._help();
  }
}
