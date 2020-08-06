import Command, {flags} from '@oclif/command'

export default abstract class extends Command {
  static flags = {
    'api-key': flags.string({
      description: 'Your API key to use for the command',
      default: '',
    }),
    environment: flags.string({
      description: 'FedaPay Api environment',
      default: '',
    }),
  }
}
