import React, { useEffect, useState } from "react";
import { loadTokens } from "../../../tokens-config/tokenService";

interface TestButtonProps {
  brand: string;
}

export const TestButton = ({ brand }: TestButtonProps) => {
  const [tokens, setTokens] = useState<any>(null);

  useEffect(() => {
    const fetchTokens = async () => {
      const loadedTokens = await loadTokens({ brand });
      setTokens(loadedTokens);
    };

    fetchTokens();
  }, [brand]);

  if (!tokens) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button style={{ backgroundColor: tokens.componentTokens.ButtonPrimary.BG.Initial }}>
        Button
      </button>
    </div>
  );
};
