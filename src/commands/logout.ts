import Command from '@oclif/command';
import Config from '../helpers/user-config';
/**
 * Logout Class extending superClass Command
 */

export default class Logout extends Command {
  static description = 'Logout of Fedapay account'

  async run() {
    new Config(this.config.configDir).clear();
  }
}
