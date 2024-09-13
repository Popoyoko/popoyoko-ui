import { Plugin } from 'vite';
import * as path from 'path';

interface VariablesConfigPluginOptions {
  tokenPath: string; 
}

export function variablesConfigPlugin(options: VariablesConfigPluginOptions): Plugin {
  return {
    name: 'variables-config-plugin',
    transform(code, id) {
      if (id.endsWith('tokens-path.json')) {
        console.log(`Transforming ${id}`);

        const tokensConfigDir = path.dirname(id);
        const resolvedTokenPath = path.relative(tokensConfigDir, path.resolve(options.tokenPath));

        const newContent = JSON.stringify({
          componentVariablesPath: resolvedTokenPath
        }, null, 2); 


        return {
          code: `export default ${newContent};`,
        };
      }
      return null;
    },
  };
}
