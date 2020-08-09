import { flags } from '@oclif/command'
import { FedaPay, Transaction } from 'fedapay'
import * as colorize from 'json-colorizer'
import Transactions from '../transactions'
import { string } from '@oclif/command/lib/flags'

export default class TransactionsCreate extends Transactions {
  static description = 'Create a Transaction'

  static flags = {
    ...Transactions.flags,
    help: flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)
    data: flags.string({
      description: 'provide all the intel of your transactions',
      required: true,
      default: `{
        description: 'Description',
        amount: 2000,
        callback_url: 'https://maplateforme.com/callback',
        currency: {
            iso: 'XOF'
        },
        customer: {
            firstname: 'John',
            lastname: 'Doe',
            email: 'john.doe@example.com',
            phone_number: {
                number: '97808080',
                country: 'BJ'
            }
        }`,
    }),
    with_token: flags.boolean({
      description: 'add the token to your transactions',
      default: false,
    }),
    force: flags.boolean({ char: 'f' }),
  }

  async run() {
    const { flags } = this.parse(TransactionsCreate)
    const apiKey = flags['api-key']
    const environment = flags.environment
    FedaPay.setApiKey(apiKey)
    FedaPay.setEnvironment(environment)

    try {
      const data = JSON.parse(flags.data)
      const transaction = await Transaction.create({
        description: data.description ? data.description : 'I do this for no particular reason',
        amount: data.amount ? data.amount : 25000,
        callback_url: data.callback_url ? data.callback_url : 'https://maplateforme.com/callback',
        currency: data.currency ? data.currency : { iso: 'XOF' },
        customer: data.customer ? data.customer : {
          firstname: 'John',
          lastname: 'Doe',
          email: 'johnanag94@gmail.com',
          phone_number: {
            number: '97808080',
            country: 'BJ',
          },
        },
      })
      this.log(chalk.green('transaction created successfully'))
      this.log(colorize(JSON.stringify(transaction, null, 2)))
      if (flags.with_token) {
        const token = await transaction.generateToken();
        this.log('Your url token is : ' + token.url)
      }

    } catch (error) {
      this.log('Oups something occured')
      this.log(error.message)
    }    // eslint-disable-next-line no-sequences

  }
}
