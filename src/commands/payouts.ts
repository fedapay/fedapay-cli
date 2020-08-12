import {flags} from '@oclif/command';
import Command from '../base';

/**
 * Payouts command class
 */
export default class Payouts extends Command {
  /**
   * The command descrition
   * @var string
   */
  static description = 'Manage FedaPay payout ressources';

  /**
    * @param string
    * payouts usage string for help
    */
   static usage = 'payouts:<operation> [parameters...]';

  /**
   * The command flags
   * @var Object
   */
  static flags = {
    ...Command.flags,
    help: flags.help({ char: 'h', description: 'Help for payouts command.' }),
  };

  async run() {
    this._help();
  }
}
