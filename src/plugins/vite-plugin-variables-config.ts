import { Plugin } from 'vite';
import * as path from 'path';

interface VariablesConfigPluginOptions {
  tokenPath: string; 
}

export function variablesConfigPlugin(options: VariablesConfigPluginOptions): Plugin {
  return {
    name: 'variables-config-plugin',
    load(id) {
      if (id.endsWith('tokens-path.json')) {

        console.log(`Using tokenPath from user config: ${options.tokenPath}`);
        
        const newContent = JSON.stringify({
          componentVariablesPath: options.tokenPath
        }, null, 2); 

        return {
          code: newContent, 
          map: null
        };
      }
      return null;
    },
  };
}
