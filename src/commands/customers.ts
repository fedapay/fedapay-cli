import {flags} from '@oclif/command'
import Command from '../base'

export default class Customers extends Command {
  static description = 'Manage FedaPay customers ressource'

  // custom usage string for help
  // this overrides the default usage
  static usage = 'customers <operation> [options]'

  // examples to add to help
  // each can be multiline
  static examples = [
    'customers list',
    'customers create --email=foo@bar.com',
    'customers retrieve --id=ID',
  ]

  static flags = {
    ...Command.flags,
    help: flags.help({char: 'h', description: 'Help for customers command'}),
  }

  async run() {
    this._help()
  }
}
