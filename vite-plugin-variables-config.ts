import { Plugin } from 'vite';

interface VariablesConfigPluginOptions {
  tokenPath: string;
}

export function variablesConfigPlugin(options: VariablesConfigPluginOptions): Plugin {
  return {
    name: 'variables-config-plugin',
    transform(code, id) {
      if (id.endsWith('tokens-config.ts')) {
        const updatedCode = code.replace(
          /componentVariablesPath:\s*".*?"/,
          `componentVariablesPath: '${options.tokenPath}'`
        );
        //console.log(`Updated variables path: ${options.tokenPath}`);
        return {
          code: updatedCode,
        };
      }
      return null;
    },
  };
}
