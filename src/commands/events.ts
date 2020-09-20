import { flags } from '@oclif/command';
import Command from '../base';

/**
 * The base class of events commands
 */
export default class Events extends Command {
  /**
   * The command description
   * @var string
   */
  static description = 'Here you can manage events';

  /**
 * The command usage
 * @var string
 */
  static usage = 'events:<operation> [parameters...]';

  /**
   * The command flags
   * @var Object
   */
  static flags = {
    ...Command.flags,
    help: flags.help({ char: 'h', description: 'Help for events command' }),
  }

  async run() {
    this._help();
  }
}
