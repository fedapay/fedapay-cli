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
  static usage = 'fedapay payouts:delete [options]'
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
    'payouts:delete --api-key=[api_key] --environment=sandbox --id=90',
    'payouts:delete --api-key=[api_key] --environment=sandbox --id=108 --confirm',

  ]

  async run() {
    const { flags } = this.parse(PayoutsDelete)
    const apiKey = flags['api-key']
    const environment = flags.environment
    const id = flags.id
    const confirm = flags.confirm
    FedaPay.setApiKey(apiKey)
    FedaPay.setEnvironment(environment)
    /**
          * @param boolean
          * Skip to confirm automatically or after yes
          */
    const confirmed = confirm || await cli.confirm('Are you sure you want to delete?')
    if (confirmed) {
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
            payout.delete()
            this.log("Succesfully deleted")
          }
        }
      }
      catch (error) {
        this.error(`${error.name} : ${error.message}`)
      }
    }
    else {
      this.exit
    }
  }
}