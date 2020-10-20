import Command, { flags } from '@oclif/command';
import UserConfig from './helpers/user-config';

/**
 * Base command class
 */
export default abstract class extends Command {
  userConfig!: UserConfig;

  /**
   * The command global flags
   */
  static flags = {
    'api-key': flags.string({
      description: 'Your API key to use for the command',
      default: '',
    }),
    environment: flags.string({
      description: 'FedaPay Api environment',
      default: '',
      char: 'e',
      options: ['development', 'sandbox', 'live']
    }),
  }

  async init() {
    this.userConfig = new UserConfig(this.config.configDir);
  }
}
