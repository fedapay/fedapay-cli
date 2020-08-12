/* eslint-disable lines-between-class-members */
import {flags} from '@oclif/command'
import Command from '../base'
export default class Transactions extends Command {

  static description = 'Here you can manage your transaction'

  static usage = 'transactions <operation> [options]'

   static examples =[
     'transactions:list',
     'transactions:create',
     'transactions:update',
     'transactions:token',
     'transactions:delete',
     'transactions:retrieve',
     'transactions:delete --transaction_id=2520 --api-key=apiKey --environment=environment',

   ]
 static flags = {
   ...Command.flags,
   help: flags.help({char: 'h', description: 'Help for transactions command'}),
 }
 async run() {
   this._help()
 }
}
