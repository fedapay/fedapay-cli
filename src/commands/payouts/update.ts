import { Command, flags } from '@oclif/command'
import { FedaPay, Payout, Transaction } from 'fedapay'
import Payouts from '../payouts'
/**
 * PayoutsUpdate class
 */
export default class PayoutsUpdate extends Command {
  static description = 'Update payouts ressource'
  static flags = {
    ...Payouts.flags,
    data: flags.string({
      description: 'Data for the API request',
      required: true,
    }),
    id: flags.integer({
      description: 'The payout id',
      required: true,
    }),
    confirm: flags.boolean({
      description: 'Skip the warning prompt and automatically confirm the command being entered',
      default: false,
      required: true
    }),
    help: flags.help({
      char: 'h',
      description: 'Help you to found out the payouts\'command'
    }),
  }
  /**
   * @param string[]
   * examples command for the help
   */
  static examples = [
    'payouts:update',
    'payouts:update --id',
    'payouts:update --data',
    'payouts:update --confirm',

  ]

  async run() {
    const { flags } = this.parse(PayoutsUpdate)
    const apiKey = flags['api-key']
    const environment = flags.environment
    const id = flags.id
    /**
     * @param boolean
     * confirm flag
     */
    const confirm = flags.confirm
    const data = flags.data

    FedaPay.setApiKey(apiKey)
    FedaPay.setEnvironment(environment)
    /**
     * @param object
     */
    const payout = await Payout.retrieve(id)
    if (payout.status == 'pending') {
      /**
       * @param integer
       * amount must be positive
       */
      if (payout.amount <= 0) {
        payout.update(id,data)
        this.log('Succesfully updated!!')
      }
      else {
        this.log('Failed Update,amount must be great than 0')
      }
      if (confirm) { payout.update(id,data) }
    }
    else{
      this.log('This payout is either sent or started ')
    }

  }
}


