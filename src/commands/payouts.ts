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
    'payouts create -d amount=5000 -d currency[iso]=XOF -d mode=mtn -d customer[firstname]=Qan customer[lastname]=Sally customer[email]=nal@exemple.com customer[phone_number][number]=65423158 customer[phone_number][country]=bj --schedule="2020-8-12 11:41:51"  --customer=2055 --schedule="2020-8-12 11:41:51" --send-now',
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
