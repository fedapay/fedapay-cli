import * as fs from 'fs';
import * as path from 'path';
export default class UserConfig {
  /**
   * Use config Class to handle the config file
   * @param {Object|string|any}
   */

  public configPath: string;
  /**
   *
   * @param {string} dir  The config directory
   */

  constructor(dir: string) {
    !fs.existsSync(dir) && fs.mkdirSync(dir);

    this.configPath = path.join(dir, 'config.json');
  }

  /**
   *
   * @param {any} config  The content to write in file
   */
  public write(config: any) {
    const oldConfig = this.readAll();
    const newConfig = { ...oldConfig, ...config };
    fs.writeFileSync(this.configPath, JSON.stringify(newConfig, null, 4));
  }

  /**
   *
   * @param {any} config  The content to write in file
   */
  public writeAll(config: any) {
    fs.writeFileSync(this.configPath, JSON.stringify(config, null, 4));
  }

  /**
   * clear method to overwrite the file
   */
  public clear() {
    fs.writeFileSync(this.configPath, (''));
  }

  /**
   *The read method
   * @param {string} key The specified key that you want to get
   * @param {any} firstValue The default value
   * @return {any} Config value
   */
  public read(key: string, firstValue: any = null): any {
    const config = this.readAll();
    const configValue = Object.prototype.hasOwnProperty.call(config, key) ? config[key] : null;

    return firstValue || configValue;
  }

  /**
   * ReadAll method
   * @return {any}
   */

  public readAll(): any {
    try {
      return JSON.parse(fs.readFileSync(this.configPath, 'utf-8'));
    } catch (error) {
      return {};
    }
  }
}
