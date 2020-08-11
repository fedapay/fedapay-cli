import { Command, flags } from '@oclif/command'
import { FedaPay, Payout, Transaction } from 'fedapay'
import * as colorize from 'json-colorizer'
import Payouts from '../payouts'
import { type } from 'os'
import cli from 'cli-ux'
/**
 * PayoutsDelete class
 */
export default class PayoutsDelete extends Command {
  /**
   * @param string
   * Description of payouts:delete command
   */
  static description = 'Delete payout ressource'

  static flags = {
    ...Payouts.flags,
    id: flags.integer({
      description: 'The id of a payout to delete',
      required: true,
    }),
    confirm: flags.boolean({
      description: 'Confirm the delete',
      default: false
    }),
    help: flags.help({
      char: 'h',
      description: 'Help for founding others delete commands'
    }),
  }
  /**
   * @param string[]
   * examples for the help
   */
  static examples = [
    'payouts:delete',
    'payouts:delete --id',
    'payouts:delete --confirm',

  ]

  async run() {
    const { flags } = this.parse(PayoutsDelete)
    const apiKey = flags['api-key']
    const environment = flags.environment
    const id = flags.id
    const confirm = flags.confirm
    FedaPay.setApiKey(apiKey)
    FedaPay.setEnvironment(environment)
    try {
      const payout = await Payout.retrieve(id)
      if (!payout) {
        this.log('Don\'t match')
      }
      else {
        /**
         * delete only if payout is pending
         */
        if (payout.status == 'pending') {

          if (await cli.confirm('Are you sure you want to delete?')) {
            payout.delete()
            this.log("Succesfully deleted")
          }
          /**
           * @param boolean
           * confirm automatically
           */
          if (confirm) { payout.delete() }
          else{
            this.error("ABORT")
            this.exit(1)
          }
            
        }
      }
    }
    catch (error) {
      this.error(`${error.name} : ${error.message}`)
    }

  }
}