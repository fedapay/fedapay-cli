import {flags} from '@oclif/command';
import Command from '../base';
/**
 * Logs class extending Command Class
 */
export default class Logs extends Command {
  /**
   * @param string
   * Description of the command Logs.
   */
  static description = 'Manage FedaPay logs';

  /**
   * @param string
   * Custom usage string for help
   * This overrides the default usage
   */
  static usage = 'logs <operation> [options]'

  /**
   * @param string[]
   * Examples to add to help.
   * Each can be multiline.
   */
  static examples = [
    'logs:list',
    'logs:retrieve --id=ID',
  ];

  /**
   * @param object
   * Declaration of the command flags.
  */
  static flags = {
    ...Command.flags,
    help: flags.help({char: 'h', description: 'Help for logs command.'}),
  };

  async run() {
    this._help();
  }
}
