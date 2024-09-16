import { Plugin } from 'vite';

interface VariablesConfigPluginOptions {
  tokenPath: string;
}

export function variablesConfigPlugin(options: VariablesConfigPluginOptions): Plugin {
  return {
    name: 'variables-config-plugin',
    transform(code, id) {
      if (id.endsWith('tokens-config.ts')) {

        console.log(`Using tokenPath from user config: ${options.tokenPath}`);

        const newContent = `
          export const config = {
            componentVariablesPath: '${options.tokenPath}'
          };
        `;

        return {
          code: newContent,
          map: null
        };
      }
      return null;
    },
  };
}
