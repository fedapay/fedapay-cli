import Command from '../base';

/**
 * Logout Class extending superClass Command
 */
export default class Logout extends Command {
  static description = 'Logout of Fedapay account'

  async run() {
    this.userConfig.clear();
  }
}
