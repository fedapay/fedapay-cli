import {flags} from '@oclif/command'
import Command from '../base'
import { FedaPay } from 'fedapay'
import open from 'open'
/**
 * import open module
 */
/**
 * Login class to obtain credentials
 */
export default class Login extends Command {
  static description = 'Login to Fedapay account'
  /**
   * @param string
   * static usage of login
   */

  static flags = {
    ...Command.flags,
    help: flags.help({ char: 'h', description: 'Help for the login command' }),

  }
  /**
   * require authclient
   * require to server port
   * require id of the user
   * need to get apitoken
   * authorize url
   * execute for login flow
   * retrieve profile id email
   */
  

  async run() {
    const { flags } = this.parse(Login)
    const apiKey = flags['api-key']
    const environment = flags.environment
    FedaPay.setApiKey(apiKey)
    FedaPay.setEnvironment(environment)

    /**
     * get token and accountId
     *
     */
    const token = FedaPay.getToken()
    /**
     * open browser
     */
    
    //const browser = await open('https://sindresorhus.com')
    try {
         console.log(token)
    } catch (error) {
          this.error('error')
    }

  }
}

