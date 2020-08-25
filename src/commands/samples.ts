import {flags} from '@oclif/command';
import  Command from '../base';

/**
 * Base class of the Sample commands
 */
export default class Samples extends Command {
  /**
   * The Command description
   * @var string
   */
  static description = 'Get some samples projects including FedaPay payment methods';

  /**
   * The commande usage
   * @var string
   */
  static usage = 'samples:<operation> [parameters...]';

  /**
   * The command flags
   * @var Object
   */
  static flags = {
    ...Command.flags,
    help: flags.help({char: 'h'}),
  }

  async run() {
    this._help();
  }
}
