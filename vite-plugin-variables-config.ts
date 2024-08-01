import { Plugin } from 'vite';

interface VariablesConfigPluginOptions {
  tokenPath: string;
}

export function variablesConfigPlugin(options: VariablesConfigPluginOptions): Plugin {
  return {
    name: 'variables-config-plugin',
    transform(code, id) {
      if (id.endsWith('tokens-config.ts')) {
        console.log(`Transforming ${id} with tokenPath ${options.tokenPath}`);
        const updatedCode = code.replace(
          /componentVariablesPath:\s*'[^']*'/,
          `componentVariablesPath: '${options.tokenPath}'`
        );
        return {
          code: updatedCode,
          map: null, 
        };
      }
      return null;
    }
  };
}

