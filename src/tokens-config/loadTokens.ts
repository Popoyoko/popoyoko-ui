import { loadTokensConfig } from './loadTokensConfig';

export const loadTokens = async () => {
  try {
    const pathToComponentTokens = await loadTokensConfig();

    console.log("Loading tokens from:", pathToComponentTokens);

    const componentTokensModule = await import(`${pathToComponentTokens}.ts`);

    return {
      componentTokens: componentTokensModule.default,
    };
  } catch (error) {
    console.error("Error loading tokens:", error);
    throw error;
  }
};
