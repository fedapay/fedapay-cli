import  {flags, Command} from '@oclif/command';
import cli from 'cli-ux';
import * as inquirer from 'inquirer';
import axios from 'axios';
import os from 'os';
import UserConfig from '../helpers/user-config';

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
      char: 'e',
      default: '',
      options: ['development', 'sandbox', 'live']
    }),
    interactive: flags.boolean({
      description: 'Login in interactive mode',
      char: 'i',
      default: false,
    }),
    help: flags.help({ char: 'h', description: 'Help for the login command' }),
  }

  /**
   * Send Link request
   * @param {string} device_name The device name
   * @param {string} environment The environment
   * @return {login_url: string; poll_url: string}
   */
  private async sendLinksRequest(device_name: string, environment: string) {
    try {
      const { data } = await axios.post('http://bragon-cli.dev.io/links', {
        device_name, environment
      });
      return data;
    } catch (e) {
      return null;
    }
  }

  /**
   * Send Poll request
   * @param {string} url
   *
   * @return {any}
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
   * Wrap the poll request with a promise.
   * Resolve it when secret key is defined.
   * Reject it when max try is reached
   * @param {string} poll_url  The poll url
   * @return Promise<any>
   */
  private async checkSecretKey(poll_url: string): Promise<any> {
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
    let account_name = 'default';
    let environment;
    let secret_key;
    let public_key;

    if (flags.interactive) {
      environment = await cli.prompt('Enter your environment');
      secret_key = await cli.prompt('Enter your secret_key');
      public_key = await cli.prompt('Enter your public_key');
    } else {
      environment = flags.environment;

      if (environment.trim() === '') {
        // Ask the user to select the environment

        let responses: any = await inquirer.prompt([{
          name: 'environment',
          message: 'Select your environment',
          type: 'list',
          choices: [{name: 'development'}, {name: 'sandbox'}, {name: 'live'}],
        }]);

        environment = responses.environment
      }

      try {
        const links = await this.sendLinksRequest(os.hostname(), environment);
        if (links === null) {
          this.error('Hostname and environnement are required');
          return;
        }

        this.log(`Authenticate URL : ${links.login_url}`);
        cli.open(links.login_url);
        cli.action.start('Waiting');
        const login = await this.checkSecretKey(links.poll_url);

        account_name = login.account_name;
        secret_key = login.secret_key;
        public_key = login.public_key;
      } catch (error) {
        this.error(error.message);
        return;
      }
    }

    const userConfig = new UserConfig(this.config.configDir);
    userConfig.write({ account_name, environment, secret_key, public_key });

    this.log('Login successfull');
  }
}
