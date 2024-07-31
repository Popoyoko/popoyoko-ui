import React, { createContext, useContext, useEffect, useState } from 'react';
import { loadTokens } from '../../tokens-config/loadTokens';
import { TokenConfig } from '../../tokens-config/tokens-config';

interface TokensContextType {
  tokens: {
    componentTokens: any;
    sizeTokens: any;
  } | null;
}

interface TokensProviderProps {
  brand: string;
  children: React.ReactNode;
}

const TokensContext = createContext<TokensContextType | undefined>(undefined);

export const TokensProvider: React.FC<TokensProviderProps> = ({ brand, children }) => {
  const [tokens, setTokens] = useState<{ componentTokens: any; sizeTokens: any } | null>(null);

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const loadedTokens = await loadTokens({ tokenDirectory: './build-tokens/web', brand });
        setTokens(loadedTokens);
      } catch (error) {
        console.error('Error loading tokens:', error);
      }
    };

    fetchTokens();
  }, [brand]);

  return (
    <TokensContext.Provider value={{ tokens }}>
      {children}
    </TokensContext.Provider>
  );
};

export const useTokens = () => {
  const context = useContext(TokensContext);
  if (context === undefined) {
    throw new Error('useTokens must be used within a TokensProvider');
  }
  return context;
};
