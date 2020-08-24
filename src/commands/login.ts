import { Command, flags } from '@oclif/command';
import axios from 'axios';
import os from 'os';
import open from 'open';

import fs from 'fs';
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

  static usage = 'login:<operation> [parameters...]';
  /**
   * The command flags
   * @var Object
   *
   */

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
  }
}
