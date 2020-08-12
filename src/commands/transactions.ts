/* eslint-disable lines-between-class-members */
import { flags } from '@oclif/command';
import Command from '../base';

/**
 * The base class of transactions commands
 */
export default class Transactions extends Command {
  /**
   * The command descrition
   * @var string
   */
  static description = 'Here you can manage your transaction';

  /**
   * The commande usage
   * @var string
   */
  static usage = 'transactions:<operation> [parameters...]';

  /**
   * The command flags
   * @var Object
   */
  static flags = {
    ...Command.flags,
    help: flags.help({ char: 'h', description: 'Help for transactions command.' }),
  }

  async run() {
    this._help();
  }
}
