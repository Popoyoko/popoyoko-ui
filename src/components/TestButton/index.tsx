// src/components/TestButton.tsx
import React from 'react';
import { useTokens } from '../../contexts/TokensProvider';

export const TestButton = () => {
  const { tokens } = useTokens();

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
