import path from 'path';
import fs from 'fs';

const configPath = path.resolve(__dirname, '../../tokens.config.js');
const config = require(configPath) as TokenConfig; 

interface TokenConfig {
  tokenDirectory: string;
  brand: string;
}

export const loadTokens = async (config: TokenConfig) => {
  const { brand, tokenDirectory } = config;

  // Chemins des fichiers de tokens
  const pathToComponentTokens = path.join(tokenDirectory, `Component${brand}.ts`);
  const pathToSizeTokens = path.join(tokenDirectory, `Sizes${brand}.ts`);

  // Chargement des modules de tokens
  const componentTokensModule = await import(pathToComponentTokens);
  const sizeTokensModule = await import(pathToSizeTokens);

  return {
    componentTokens: componentTokensModule.default,
    sizeTokens: sizeTokensModule.default,
  };
};
