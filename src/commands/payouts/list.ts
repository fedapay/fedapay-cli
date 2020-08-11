import { Command, flags } from '@oclif/command'
import { FedaPay, Payout, Customer, FedaPayObject } from 'fedapay'
import * as colorize from 'json-colorizer'
import Payouts from '../payouts'
//Class PayoutsList 
export default class PayoutsList extends Command {
  static description = 'List payouts ressource'
  static usage = 'fedapay payouts:list [options]' 
  static flags = {
    ...Payouts.flags,
    limit: flags.integer({
      char: 'l',
      description: 'Limit the list of payouts to display',
      default: 25,

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
      description: 'Help for founding payouts list command ',
    }),

  }
  static examples = [
    'payouts:list --api-key=[api_key] --environment=sandbox --limit=20',
    'payouts:list --api-key=[api_key] --environment=sandbox --page=2',
    'payouts:list --api-key=[api_key] --environment=sandbox--customer=2055',
    'payouts:list --api-key=[api_key] --environment=sandbox --status=failed',
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
