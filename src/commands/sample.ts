import {Command, flags} from '@oclif/command';

export default class Sample extends Command {
  /**
 * Sample class extending Command Class
 */
  static description = 'Sample integration built by FedaPay';

  /**
    * @param string
    * custom usage string for help
    * this overrides the default usage
    */
  static usage = 'sample:<operation> [parameters...]';

  /**
   * @param object
   * Declaration of the command flags
  */
  static flags = {
    ...Command.flags,
    help: flags.help({char: 'h', description: 'Help for sample command.'}),
  };

  async run() {
    this._help();
  }
}
