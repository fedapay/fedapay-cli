import Command from '@oclif/command';
import UserConfig from '../helpers/user-config';

/**
 * Logout Class extending superClass Command
 */
export default class Logout extends Command {
  static description = 'Logout of Fedapay account'

  async run() {
    const userConfig = new UserConfig(this.config.configDir);
    userConfig.clear();
  }
}
