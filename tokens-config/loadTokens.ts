interface TokenConfig {
    brand: string; 
  }
  
  export const loadTokens = async (config: TokenConfig) => {
    const { brand } = config;
  
    const pathToComponentTokens = `../build-tokens/web/Component${brand}.ts`;
    const pathToSizeTokens = `../build-tokens/web/Sizes${brand}.ts`;
  
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