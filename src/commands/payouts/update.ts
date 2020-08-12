import { flags } from '@oclif/command';
import { FedaPay, Payout, Transaction } from 'fedapay';
import DataFlagtransformer from '../../helpers/dataparse';
import cli from 'cli-ux';
import chalk from 'chalk';
import Payouts from '../payouts';
/**
 * PayoutsUpdate class
 */
export default class PayoutsUpdate extends Payouts {
  static description = 'Update payouts ressource'
  static usage = 'fedapay payouts:update [options]'
  static flags = {
    ...Payouts.flags,
    data: flags.string({
      char: 'd',
      description: 'Data for the API request',
      required: true,
      multiple: true
    }),
    id: flags.integer({
      description: 'The payout id',
      required: true,
    }),
    customer: flags.boolean({
      description: 'The customer id for the payout to change',
      default: false,
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
    'payouts:update --api-key=[api_key] --environment=sandbox --id=57',
    'payouts:update --api-key=[api_key] --environment=sandbox --id=90 -d amount=550 -d currency[iso]=XOF -d mode=moov -d customer[firstname]=Yu customer[lastname]=Ma customer[email]=vul@exemple.com customer[phone_number][number]=65423158 customer[phone_number][country]=bj',
    'payouts:update --api-key=[api_key] --environment=sandbox  --id=109 --confirm',
    'payouts:update --api-key=[api_key] --environment=sandbox  --id=109 --customer=2055',
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
    /**
     * @param object
     * parsing data flag input to object
     */
    const data = DataFlagtransformer.Transform(flags.data)

    FedaPay.setApiKey(apiKey)
    FedaPay.setEnvironment(environment)

    const confirmed = confirm|| await cli.confirm("Sure to continue?")
    if (confirmed) {
      try {
        /**
     * @param object
        */
        cli.action.start('Retrieving payout');
        const payout = await Payout.retrieve(id);
        if (payout.status == 'pending') {
          /**
       * @param integer
       * amount must be positive
       */
          if (payout.amount <= 0) {
            this.log(chalk.red('Failed Update,amount must be great than 0'));
          }
          else {
            payout.update(id,data)
            this.log(chalk.green('Succesfully updated!!'));
          }
        }
      } catch(error) {
        this.log(chalk.red('This payout is either sent or started '));
      }
    }
    else {
      this.log('Updated canceled')

    }
    cli.action.stop();
  }
}



