import * as fs from 'fs';

export default class Config {
  /**
   * Use config Class to handle the config file
   * @param {Object|string|any}
   */

  public dir: string;
  /**
   *
   * @param {string} dir  The path of  config file
   */

  constructor(dir: string) {
    this.dir = dir;
  }

  /**
   *
   * @param {any} config  The content to write in file
   */
  public writeAll(config: any) {
    if (typeof config === 'object') {
      fs.writeFileSync(this.dir, JSON.stringify(config, null, 4));
    } else {
      fs.writeFileSync(this.dir, config);
    }
  }

  /**
   *The read method
   * @param {string} key The specified key that you want to get
   * @param {string} defaultValue The default value
   */

  public read(key: string, defaultValue: any) {
    const lines = fs.readFileSync(this.dir, 'utf-8');
    const obj = JSON.parse(lines);

    for (const key_obj in obj) {
      if (key_obj === key) {
        return obj[key];
      }

      return defaultValue;
    }

    return;
  }

  /**
   * ReadAll method
   * @return {any}
   */

  public readAll(): any {
    return fs.readFileSync(this.dir, 'utf-8');
  }
}
