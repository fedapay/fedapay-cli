import { flags } from '@oclif/command';
import cli from 'cli-ux';
import Samples from '../samples';
import * as data from './samples-list.json';
const { execSync } = require('child_process');

/**
 * samplesCreate class extending the superClass Samples
 */
export default class SamplesCreate extends Samples {
  /**
   * @param String
   * Description of the command samples:create
   */
  static description = 'create a sample project integrating Fedapay';

  /**
   * @param object
   * Declaration of the command flag
   */
  static flags = {
    ...Samples.flags,
    help: flags.help({ char: 'h' }),
    type: flags.string({
      required: true,
      description: 'Type of project you want to create',
    }),
    name: flags.string({
      description: 'The name of your project',
      default: 'My project'
    }),
  };

  /**
   * @param string[]
   * some examples of the samples create use for help
   */
  static examples = [
    'samples:create --api-key=[API-KEY] --environment=[env] --type=[TYPE] --name=[PROJECT_NAME]',
  ];

  async run() {
    cli.action.start('Creating your sample');
    /**
     * @param object
     * get flags value
     */
    const { flags } = this.parse(SamplesCreate);
    /**
     * require modules who 'll be used
     */
    const replace = require('replace-in-file');
    const fs = require('fs');

    const type = flags.type;
    const name = flags.name;
    /**
     * @param string
     * api key value
     */
    const apiKey = flags['api-key'];

    /**
     * @param string
     * environment type
     */
    const environment = flags.environment;
    /**
     * @param String[]
     * string Array with all the values to replace from input
     */
    const replaces = [environment, name, apiKey];

    /**
     * @param string
     * get the Url of the sample to clone
     */
    const url = data[type]['repository'];
    /**
     * @param string
     * prepare to be executed
     */
    const command = ('git clone -b develop ' + url + ' ' + name);
    try {
      /**
     * @var = String
     * execute the bash command leading to clone sample project
     */
      execSync(command);
      /**
       * @var string
       * path to manifest.json file
       */
      const path = './' + name + '/manifest.json';
      /**
       * Read file contents
       */
      fs.readFileSync(path, 'utf8',  (err: any, file: string) => {
        if (err) throw err;
        const object = JSON.parse(file);

        for (const key in object.replacements) {
          if (object.replacements[key]) {
            /**
             * @var string[]
             * Array of string
             */
            const replacement = object.replacements[key].split(':');
            /**
             * Path of file to copy
             */
            const origin = './' + name + '/' + replacement[0];
            /**
             * Path to destination file
             */
            const destination = './' + name + '/' + replacement[1];

            /**
             * @var string
             * Prepare the bash command to be executed
             */
            const copy = 'cp ' + origin + ' ' + destination;
            /**
             * @var string
             * Copy the original file and rename it with project name
             */
            execSync(copy);
            /**
             * @param Object
             * Prepare the replacement of default value in customs values
             */
            const options = {
              files: destination,
              from: [/<%ENVIRONMENT%>/g, /<%PROJECT_NAME%>/g, /<%SECRET_KEY%>/g],
              to: replaces,
            };
            /**
             * @param string
             * Replace  the customised data
             */
            try {
              replace.sync(options);
            } catch (error) {
              this.log('Error occurred:', error);
            }
          }
        }
      });
    } catch (error) {
      this.error(error.message);
    }
    cli.action.stop('done');
  }
}
