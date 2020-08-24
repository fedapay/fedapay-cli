<<<<<<< HEAD
import { Command, flags } from '@oclif/command';
import axios from 'axios';
import os from 'os';
import open from 'open';

import fs from 'fs';
=======
import { flags, Command } from '@oclif/command'
import cli from 'cli-ux';
import axios from 'axios';
import os from 'os';

>>>>>>> 7ea58c1d7185fc57bb7c4e05dc166f87e6c4bddb
/**
 * Login Class extending superClass Command
 */

export default class Login extends Command {
  /**
   * @param string
   * Description of the login command
   */
  static description = 'Connect to Fedapay account';
  /**
   * @param string
   * login usage
   */

<<<<<<< HEAD
  static usage = 'login:<operation> [parameters...]';
=======
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
      // TODO Replace http://brexis-cli.dev.io/links by https://cli.fedapay.com/links
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

>>>>>>> 7ea58c1d7185fc57bb7c4e05dc166f87e6c4bddb
  /**
   * The command flags
   * @var Object
   *
   */
<<<<<<< HEAD

  static flags = {
    ...Command.flags,
    help: flags.help({ char: 'h', description: 'Help for payouts command.' }),
  };

  async run() {

    const { flags } = this.parse(Login);

    /**
     * required parameters
     * @params String
     */

    const environment = 'sandbox';
    const device_name = os.hostname();
    try {
      const response = await axios.post('http://localhost:8000/links', {
        'environment': environment,
        'device_name': device_name
      });
      const data = response.data;
      const url_browser = data.login_url;
      open(url_browser);
      const url = data.poll_url;
      async function getData() {
        await axios.get(url).then((res) => {
          const datas = res.data;
          datas.forEach(dat => {
            if ((typeof dat['secret_key'] === 'undefined' || 'null') && (typeof dat['public_key'] === 'undefined' || 'null')) {
              setTimeout(getData, 5000);
            }
            else {
              fs.writeFile("infos.json", JSON.stringify(data), function (err) {
                if (err) throw err;
                console.log('complete');
              });
            }
          });
        });
      }
    getData();
  }
    catch (error) {
      console.log(error);
    }
=======
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
>>>>>>> 7ea58c1d7185fc57bb7c4e05dc166f87e6c4bddb
  }
}
