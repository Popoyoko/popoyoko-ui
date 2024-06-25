import React from "react";
import { loadTokens } from "../../../tokens-config/tokenService";

interface TestButtonProps {
  brand: string;
}

export const TestButton = ({ brand }: TestButtonProps) => {
  const tokens = loadTokens({ brand });

  return (
    <div>
      <button style={{ backgroundColor: tokens.componentTokens.ButtonPrimary.BG.Initial }}></button>
    </div>
  );
};
