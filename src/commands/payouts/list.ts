import { Command, flags } from '@oclif/command'
import { FedaPay, Payout, Customer, FedaPayObject } from 'fedapay'
import * as colorize from 'json-colorizer'
import Payouts from '../payouts'
//Class PayoutsList 
export default class PayoutsList extends Command {
  static description = 'List payouts ressource'

  static flags = {
    ...Payouts.flags,
    limit: flags.integer({
      description: 'Limit the list of payouts to display',
      default: 10,

    }),
    page: flags.integer({
      description: 'Allow the number of payouts per page to display',
      default: 1,
    }),
    customer: flags.integer({
      description: 'Allow the payout by customer',
      default: 2055,
    }),
    status: flags.string({
      description: 'Ckeck the payout by status',
      default: 'failed',
    }),
    help: flags.help({
      char: 'h',
      description: '',
    }),

  }
  static examples = [
    'payouts:list',
    'payouts:list --limit=20',
    'payouts:list --page',
    'payouts:list --customer',
    'payouts:list --status',
  ]



  async run() {
    const { flags } = this.parse(PayoutsList)
    const apiKey = flags['api-key']
    const environment = flags.environment
    const limit = flags.limit
    const page = flags.page
    const customer = flags.customer
    const status = flags.status

    FedaPay.setApiKey(apiKey)
    FedaPay.setEnvironment(environment)

     /**
      * @param {object} 
      * 
      */
    const payouts = await Payout.all({
      per_page: limit, page: page,
      /**
       * Only set the filters if the customer or the status are provided
       */
      'filters[compare][customer_id][op]': '=',
      'filters[compare][customer_id][value]': customer,
      'filters[compare][status][op]': '=',
      'filters[compare][status][value]': status,
    })
    this.log(colorize(JSON.stringify(payouts, null, 2)))
  }
}
