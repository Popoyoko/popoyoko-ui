import { Plugin } from 'vite';

interface VariablesConfigPluginOptions {
  tokenPath?: string;
}

export function variablesConfigPlugin(options: VariablesConfigPluginOptions): Plugin {
  return {
    name: 'variables-config-plugin',
    transform(code, id) {
      if (id.endsWith('loadTokensConfig.ts')) {
        const userTokenPath: string = options.tokenPath || '../../popoyoko-default-variables/web/ComponentPopoyoko';
        
        console.log(`Using tokenPath from user config: ${userTokenPath}`);

        const modifiedCode = code.replace(
          /const defaultTokenPath = ["'].*?["'];/,
          `const defaultTokenPath = '${userTokenPath}';`
        );

        console.log("Modified code:\n", modifiedCode);

        return {
          code: modifiedCode,
          map: null,
        };
      }
      return null;
    },
  };
}
