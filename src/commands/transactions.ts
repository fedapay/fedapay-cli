/* eslint-disable lines-between-class-members */
import {flags} from '@oclif/command'
import Command from '../base'
export default class Transactions extends Command {
  static description = 'Here you can manage your transaction'
  // eslint-disable-next-line lines-between-class-members
  static usage = 'transactions <operation> [options]'
   static examples =[
     'transactions:list',
     'transactions:create',
   ]

 static flags = {
   ...Command.flags,
   help: flags.help({char: 'h', description: 'Help for transactions command'}),
 }

 async run() {
   this._help()
 }
}
