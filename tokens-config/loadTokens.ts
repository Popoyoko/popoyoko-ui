import path from 'path';
import fs from 'fs';

interface TokenConfig {
  brand: string; 
  tokenDirectory: string;
}

const defaultConfigPath = path.resolve(__dirname, '../tokens.config.js');
const defaultConfig = require(defaultConfigPath);

export const loadTokens = async (config: Partial<TokenConfig> = {}) => {
  const effectiveConfig: TokenConfig = {
    brand: config.brand || defaultConfig.brand,
    tokenDirectory: config.tokenDirectory || defaultConfig.tokenDirectory,
  };

  const { brand, tokenDirectory } = effectiveConfig;

  const pathToComponentTokens = path.join(tokenDirectory, `Component${brand}.ts`);
  const pathToSizeTokens = path.join(tokenDirectory, `Sizes${brand}.ts`);

  console.log("Loading tokens from:", pathToComponentTokens, pathToSizeTokens);

  const componentTokensModule = await import(pathToComponentTokens);
  const sizeTokensModule = await import(pathToSizeTokens);

  console.log("Loaded component tokens:", componentTokensModule.default);
  console.log("Loaded size tokens:", sizeTokensModule.default);

  return {
    componentTokens: componentTokensModule.default,
    sizeTokens: sizeTokensModule.default,
  };
};
