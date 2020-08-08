import { Command, flags } from '@oclif/command'
import { FedaPay, Payout, Transaction } from 'fedapay'
import Payouts from '../payouts'

export default class PayoutsUpdate extends Command {
  static description = 'Update payouts ressource'
  //modifier les details du paiement
  static flags = {
    ...Payouts.flags,
    data: flags.string({
      description: 'Update a payout ',
      required: true,
    }),
    id: flags.integer({
      description: 'Update a payout per id',
      required: true,
    }),
    confirm: flags.boolean({
      description: 'Confirm updating',
      default: false,
      required: true
    }),
    customer: flags.integer({
      description: 'Update the payout ressource per customer',
      default: 2055,
      required: true
    }),
    help: flags.help({ char: 'h' }),
  }
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
    const confirm = flags.confirm
    const customer = flags.customer
    const data = flags.data
    const info = {
      "amount": 2000,
      "currency": { "iso": "XOF" },
      "mode": "mtn",
      "customer": {
        "email": "john.doe@example.com",
      }
    }

    FedaPay.setApiKey(apiKey)
    FedaPay.setEnvironment(environment)
    //get details of payouts by id
    const payout = await Payout.retrieve(id)
    //amount must be positive
    if (payout.amount <= 0) {
      //insert a new data
      const payouts = await Payout.create(info)
      this.log('Succesfully updated!!')
    }
    else {
      this.log('Failed Update,amount must be great than 0')
    }


  }
}



