import {Command, flags} from '@oclif/command';

export default class Samples extends Command {
  /**
 * Samples class extending Command Class
 */
  static description = 'Samples integration built by FedaPay';

  /**
    * @param string
    * custom usage string for help
    * this overrides the default usage
    */
  static usage = 'samples:<operation> [parameters...]';

  /**
   * @param object
   * Declaration of the command flags
  */
  static flags = {
    ...Command.flags,
    help: flags.help({char: 'h', description: 'Help for samples command.'}),
  };

  async run() {
    this._help();
  }
}
