import { flags, Command } from '@oclif/command'
import cli from 'cli-ux';
import { FedaPay } from 'fedapay'
import axios from 'axios';
import os from 'os';

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
    environment: flags.string({
      description: 'FedaPay Api environment',
      default: 'sandbox',
    }),
    interactive: flags.string({
      description: 'Login in interactive mode',
      char: 'i',
    }),
    help: flags.help({ char: 'h', description: 'Help for the login command' }),
  }

  /**
   * Send Link request
   * @param device_name
   * @param environment
   *
   * @return {login_url: string; poll_url: string}
   */
  private async sendLinksRequest(device_name: string, environment: string) {
    try {
      const { data } = await axios.post('http://brexis-cli.dev.io/links', {
        device_name, environment
      });
      return data;
    } catch (e) {
      return null;
    }
  }

  /**
   * Send Poll request
   * @param url
   *
   * @return any
   */
  private async sendPollRequest(url: string) {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      return null;
    }
  }

  /**
   * Wrap the poll request with a promise. Resolve it when secret key is defined.
   * Reject it when max try is reached
   * @param poll_url
   * @return Promise
   */
  private async checkSecretKey(poll_url: string) {
    return new Promise((resolve, reject) => {
      const maxTries = 10;
      let tries = 0;

      const pollIntervalId = setInterval(async () => {
        const login = await this.sendPollRequest(poll_url);

        tries++;

        if (login && login.secret_key) {
          clearInterval(pollIntervalId);
          resolve(login);
        }

        if (tries > maxTries) {
          clearInterval(pollIntervalId);
          reject(new Error('Unabled to login. Try interactive mode.'));
        }
      }, 5000);
    });
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

    const environment = flags.environment;

    // TODO: CHeck interactive mode


    // Else, do browser login
    try {
      const links = await this.sendLinksRequest(os.hostname(), environment);

      if (links === null) {
        return;
      }

      this.log(`Authenticate URL : ${links.login_url}`);
      cli.open(links.login_url);

      cli.action.start('Waiting');
      const login = await this.checkSecretKey(links.poll_url);

      // TODO: Configure account with secret key and public key using oclif config
      console.log(login);
    } catch (error) {
      this.error(error.message)
    }

    cli.action.stop();
  }
}
