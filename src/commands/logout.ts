import Command from '@oclif/command';
import UserConfig from '../helpers/user-config';

/**
 * Logout Class extending superClass Command
 */
export default class Logout extends Command {
  /**
   * @param string
   * Description of the logout command
   */
  static description = 'Logout of Fedapay account'
  /**
   * @param string
   * logout usage
   */

  static usage = 'login [parameters...]';

  async run() {
    const userConfig = new UserConfig(this.config.configDir);
    userConfig.clear();
  }
}
