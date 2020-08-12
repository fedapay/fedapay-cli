import {flags} from '@oclif/command'
import Command from '../base'
/**
 * Payouts command class 
 */
export default class Payouts extends Command {
  static description = 'Manage FedaPay payouts ressource'
  /** 
    * @param string
    * payouts usage string for help
    
    */
  static usage = 'payouts <operation> [options]'
  /**
   * @param string[]
   * examples for the help
   */
  static examples = [
    'payouts list',
    'payouts create',
    'payouts update --id  -d  --customer --confirm',
    'payouts delete  --id --confirm',
    'payouts schedule --id --when',
    'payouts send-now',
  ]
  static flags = {
    ...Command.flags,
    help: flags.help({char: 'h', description:'Help for payouts\'command'}), 
  }
  async run() {
    this._help
  }
}
