import React, { createContext, useContext, useState, useEffect } from 'react';
import { tokenPath } from './tokensconfig';



function loadTokens(token: string) {
    const tokens = {
      Colors: {
        Dark: require(`${tokenPath}/${token}/Color${token}Dark.ts`).default,
        Light: require(`${tokenPath}/${token}/Color${token}Light.ts`).default,
      },
      Sizes: require(`${tokenPath}/${token}/Sizes${token}.ts`).default,
      Components: require(`${tokenPath}/${token}/Component${token}.ts`).default,
    };
    return tokens;
  }

const TokenContext = createContext(null);

export const useTokens = () => useContext(TokenContext);

export const TokenProvider: React.FC<{ tokenName: string }> = ({ children, tokenName }) => {
  const [tokens, setTokens] = useState(null);

  useEffect(() => {
    const loadedTokens = loadTokens(tokenName);
    setTokens(loadedTokens);
  }, [tokenName]);

  if (!tokens) {
    return <div>Loading tokens...</div>;
  }

  return (
    <TokenContext.Provider value={tokens}>
      {children}
    </TokenContext.Provider>
  );
};
