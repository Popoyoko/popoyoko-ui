import React from 'react';
import { useTokens } from '../../../tokens-config/TokenContext';

interface TestButtonProps {
  label: string;
}

export const TestButton: React.FC<TestButtonProps> = ({ label }) => {
  const { componentTokens } = useTokens();

  const BG = {Initial:componentTokens.ButtonPrimary.BG.Initial}

  if (!componentTokens) {
    return (
      <p>no component tokens</p>
    ); 
  }

  return (
    <button style={{ backgroundColor: BG.Initial}}>
      {label}
    </button>
  );
};

