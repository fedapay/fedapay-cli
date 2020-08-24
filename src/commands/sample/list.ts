import {Command, flags} from '@oclif/command';
import chalk from 'chalk';
import data from '../sample/sample-list.json';

/**
 * SampleList class extending the superClass Sample
 */
export default class SampleList extends Command {
  /**
   * @param string
   * Description of the command Sample:list description
   */
  static description = 'A list of available Fedapay Sample integrations that can be setup and bootstrap by the CLI.'

  /**
   * @param object
   * Declaration of the command flags
  */
  static flags = {
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
    'sample:list'
  ];

  async run() {
    /**
     * Display every fedapay sample available.
     */
    this.log();
    this.log(chalk.bold.italic('A list of available Fedapay sample.'));
    this.log();

    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        this.log(chalk.bold(key));
        this.log(data[key].description);
        this.log(`Repo: ${data[key].repository}`);
        this.log();
      }
    }
  }
}
