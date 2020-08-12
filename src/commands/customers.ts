import {flags} from '@oclif/command';
import Command from '../base';

/**
 * CustomersCreate class extending Command Class
 */
export default class Customers extends Command {
  /**
   * @param string
   * Description of the command Customer
   */
  static description = 'Manage FedaPay customer ressources';

  /**
    * @param string
    * custom usage string for help
    * this overrides the default usage
    */
   static usage = 'customers:<operation> [parameters...]';

  /**
   * @param object
   * Declaration of the command flags
  */
  static flags = {
    ...Command.flags,
    help: flags.help({char: 'h', description: 'Help for customers command.'}),
  }

  async run() {
    this._help();
  }
}
