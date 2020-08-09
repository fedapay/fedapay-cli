import { Command, flags } from '@oclif/command'
import { FedaPay, Payout, Transaction } from 'fedapay'
import * as colorize from 'json-colorizer'
import Payouts from '../payouts'
import { type } from 'os'
import cli from 'cli-ux'
import { abort } from 'process'

export default class PayoutsDelete extends Command {
  static description = 'Delete payout ressource'

  static flags = {
    ...Payouts.flags,
    id: flags.integer({
      description: 'Delete a payout',
      required: true,
    }),
    confirm: flags.boolean({
      description: 'Confirm the delete',
      required: false
    }),
    help: flags.help({ char: 'h' }),
  }
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
        //delete if payout is pending
        if (payout.status !== 'pending') {
          this.error('Not authorized')
        }
        else
          if (await cli.confirm('Êtes-vous sûr de vouloir supprimer ?')){
            payout.delete()
            this.log("Succesfully deleted")
          }
          else () =>
            this.error("ABORT")


      }
    }
    catch (error) {
      this.error("Bad request")
    }

  }
}