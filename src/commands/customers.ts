import {flags} from '@oclif/command'
import Command from '../base'

export default class Customers extends Command {
  static description = 'Manage FedaPay customers ressource'

  static usage = 'customers <operation> [options]'

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
