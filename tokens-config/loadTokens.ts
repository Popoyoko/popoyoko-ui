import config from './tokens-config'; 
import { TokenConfig } from './tokens-config';

export const loadTokens = async (config: TokenConfig) => {
  const { tokenDirectory, brand } = config;

  const pathToComponentTokens = `${tokenDirectory}/web/Component${brand}.ts`;
  const pathToSizeTokens = `${tokenDirectory}/web/Sizes${brand}.ts`;

  console.log("Loading tokens from:", pathToComponentTokens, pathToSizeTokens);

  try {
    const componentTokensModule = await import(/* @vite-ignore */ pathToComponentTokens);
    const sizeTokensModule = await import(/* @vite-ignore */ pathToSizeTokens);

    console.log("Loaded component tokens:", componentTokensModule.default);
    console.log("Loaded size tokens:", sizeTokensModule.default);

    return {
      componentTokens: componentTokensModule.default,
      sizeTokens: sizeTokensModule.default,
    };
  } catch (error) {
    console.error('Error loading tokens:', error);
    throw error; 
  }
};
