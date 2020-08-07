import {Command, flags} from '@oclif/command'
import {FedaPay, Payout, Customer, FedaPayObject} from 'fedapay'
import * as colorize from 'json-colorizer'
import Payouts from '../payouts'

export default class PayoutsList extends Command {
  static description = 'List payouts ressource'

  static flags = {
    ...Payouts.flags,
    limit:flags.integer({
      description:'Limit the list of payouts to display',
      default:10,

    }),
    page:flags.integer({
      description:'Allow the number of payouts per page to display',
      default:1,
    }),
    customer:flags.integer({
      description:'Allow the payout per customer',
      default:1036,
    }),
    status:flags.string({}),
    help:flags.help({char:'h'}),

  }
  static examples = [
    'payouts:list',
    'payouts:list --limit=20',
    'payouts:list --page',
    'payouts:list --customer',
    'payouts:list --status',
  ]

  

  async run() {
   const {flags} = this.parse(PayoutsList)
   const apiKey = flags['api-key']
   const environment = flags.environment
   const limit = flags.limit
   const page =flags.page
   const customer= flags.customer
   //const id = FedaPayObject. definir une methode pour afficher l'id du customer
   //const id = Payout["customer_id"]

   FedaPay.setApiKey(apiKey)
   FedaPay.setEnvironment(environment)
   //const cust = await Customer.retrieve(id)  

    const payouts = await Payout.all({per_page: limit,page:page,customer_id:customer})
    this.log(colorize(JSON.stringify(payouts, null, 2)))
    
  }
}
