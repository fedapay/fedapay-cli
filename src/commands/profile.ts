import Command from '@oclif/command';
import chalk from 'chalk';
import UserConfig from '../helpers/user-config';

/**
 * Profile Class extending superClass Command
 */
export default class Profile extends Command {
  /**
   * @param string
   * Description of the profile command
   */
  static description = 'Display current login information'

  /**
   * @param string
   * profile usage
   */

  static usage = 'profile [parameters...]';

  async run() {
    const {
      account_name, environment, secret_key, public_key
    } = (new UserConfig(this.config.configDir)).readAll();

    this.log(
      chalk.bold.blue('Accnount name: ') + chalk.bold(account_name)
    );
    this.log(
      chalk.bold.blue('Environment: ') + chalk.bold(environment)
    );
    this.log(
      chalk.bold.blue('Secret key: ') + chalk.bold(secret_key)
    );
    this.log(
      chalk.bold.blue('Public Key: ') + chalk.bold(public_key)
    );
  }
}
