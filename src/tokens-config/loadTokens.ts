import { config } from './tokens-config';

export const loadTokens = async () => {
  try {
    const pathToComponentTokens = `${config.componentVariablesPath}`;

    console.log("Loading tokens from:", pathToComponentTokens);

    const componentTokensModule = await import(`${pathToComponentTokens}.ts`);

    console.log("Loaded component tokens:", componentTokensModule.default);

    return {
      componentTokens: componentTokensModule.default,
    };
  } catch (error) {
    console.error("Error loading tokens:", error);
    throw error;
  }
};
