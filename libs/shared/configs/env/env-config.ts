import { existsSync, readFileSync } from 'fs';
import { load } from 'js-yaml';
import { join } from 'path';


export class EnvConfig  {
  static get(key: string, defaultValue?: any): any {
    if (
      process.env[key] !== null &&
      process.env[key] !== undefined &&
      process.env[key] !== 'null' &&
      process.env[key] !== 'undefined'
    ) {
      return process.env[key];
    } else {
      this.set(key, defaultValue);
      return defaultValue;
    }
  }

  static set(key: string, defaultValue: any): void {
    process.env[key] = defaultValue;
  }

  private static config(): any {
    return load(readFileSync(this.get('NODE_CONFIG_DIR'), 'utf8'));
  }

  static setConfigName(envName: string = process.env.NODE_ENV): void {
    this.set('NODE_CONFIG_ENV', envName);
  }

  static registerConfigDir(directori: string): void {
    this.get('NODE_ENV', 'local');
    const envName = 'NODE_CONFIG_DIR';
    const selecedEnv = process.env.NODE_ENV;
    const finalDirectories = join(directori, `${selecedEnv}.yaml`);
    this.set(envName, finalDirectories);
    process.env = {
      ...process.env,
      ...Object.assign({}, this.config()),
    };

    if (!existsSync(finalDirectories))
      throw new Error(
        `Environment ${selecedEnv} not found pleace create your config js in path ${finalDirectories}`,
      );

    console.log(
      `=== NODE-CONFIG CONFIGURATION VALUE (${finalDirectories}) ===`,
      JSON.stringify(Object.assign({}, this.config()), null, 2),
    );
  }
}
