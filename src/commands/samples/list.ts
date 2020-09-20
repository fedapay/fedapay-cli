import {Command, flags} from '@oclif/command';
import chalk from 'chalk';
import Samples from '../samples';
import data from '../samples/samples-list.json';

/**
 * SamplesList class extending the superClass Samples
 */
export default class SamplesList extends Command {
  /**
   * @param string
   * Description of the command Samples:list description
   */
  static description = 'A list of available Fedapay Samples integrations that can be setup and bootstrap by the CLI.'

  /**
    * @param string
    * custom usage string for help
    * this overrides the default usage
    */
   static usage = 'samples:list [parameters...]';

  /**
   * @param object
   * Declaration of the command flags
  */
  static flags = {
    ...Samples.flags,
    help: flags.help({
      char: 'h',
      description: 'List Fedapay Samples supported by the CLI'
    })
  };

  /**
   * @param string[]
   * some examples of the custommers list use for help
   */
  static examples = [
    'samples:list'
  ];

  async run() {
    /**
     * Display every fedapay samples available.
     */
    this.log();
    this.log(chalk.bold.italic('A list of available Fedapay samples.'));
    this.log();

    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        this.log(chalk.bold(key));
        this.log((<any>data)[key].description);
        this.log(`Repo: ${(<any>data)[key].repository}`);
        this.log();
      }
    }
  }
}
