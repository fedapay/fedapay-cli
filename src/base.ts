import Command, {flags} from '@oclif/command';

/**
 * Base command class
 */
export default abstract class extends Command {
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
      default: 'sandbox',
    }),
  }
}
