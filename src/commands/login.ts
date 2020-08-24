import { flags, Command } from '@oclif/command'
import cli from 'cli-ux';
import axios from 'axios';
import os from 'os';
import * as fs from 'fs-extra';

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
      const { data } = await axios.post('https://cli.fedapay.com/links', {
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
   * The command flags
   * @var Object
   *
   */
  async run() {
    const { flags } = this.parse(Login);
    if (flags.interactive)
    {
      const env = await cli.prompt('Enter your environment');
      const secret_key = await cli.prompt('Enter your secret_key');
      const public_key = await cli.prompt('Enter your public_key');
      fs.writeFile('config.json', JSON.stringify([`environment:${env},
      secret_key:${ secret_key},public_key:${public_key}`]), function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("JSON saved");
        }
      });
    }
    else {
      const environment = flags.environment;
      try {
        const links = await this.sendLinksRequest(os.hostname(), environment);

        if (links === null) {
          return;
        }

        this.log(`Authenticate URL : ${links.login_url}`);
        cli.open(links.login_url);

        cli.action.start('Waiting');
        const login = await this.checkSecretKey(links.poll_url);
        const secret_key = await cli.prompt('Enter your secret_key');
        const public_key = await cli.prompt('Enter your public_key');
        await fs.writeFile((this.config.configDir, 'config.json'), JSON.stringify([secret_key, public_key]));
        console.log(login);
      } catch (error) {
        this.error(error.message);
      }
    }
    cli.action.stop();
  }
}
