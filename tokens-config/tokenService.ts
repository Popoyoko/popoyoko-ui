interface TokenConfig {
    brand: string; 
  }
  
  export const loadTokens = (config: TokenConfig) => {
    const { brand } = config;
  
    const pathToComponentTokens = `build-tokens/web/Component${brand}.ts`;
    const pathToSizeTokens = `build-tokens/web/Sizes${brand}.ts`;
  
    const componentTokens = require(pathToComponentTokens);
    const sizeTokens = require(pathToSizeTokens);
  
    return {
      componentTokens,
      sizeTokens,
    };
  };