import { Plugin } from 'vite';
import * as path from 'path';

interface VariablesConfigPluginOptions {
  tokenPath: string; 
}

export function variablesConfigPlugin(options: VariablesConfigPluginOptions): Plugin {
  return {
    name: 'variables-config-plugin',
    transform(code, id) {
      if (id.endsWith('tokens-config.ts')) {
        const tokensConfigDir = path.dirname(id);

        const resolvedTokenPath = path.relative(tokensConfigDir, path.resolve(options.tokenPath));

        const updatedCode = code.replace(
          /componentVariablesPath:\s*".*?"/,
          `componentVariablesPath: '${resolvedTokenPath}'`
        );

        return {
          code: updatedCode,
        };
      }
      return null;
    },
  };
}
