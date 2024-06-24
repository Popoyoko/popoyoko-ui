import React from "react";
import { Icon } from "../Icon";
import  tokenfile from "../../tokens/config";


type TokenizedComponent = {
  tokenfile: "../../tokens/config";
}

interface InformationProps extends TokenizedComponent {
  label?: string;
  background?: string;
}

export const Information = ({
  label = "Information",
  background = tokenfile.Test.color,
}: InformationProps) => {
  return (
    <div style={{ ...tokenfile.InformationSection, background}} >
      <Icon.Information />
      <p style={tokenfile.InformationContent}>{label}</p>
    </div>
  );
};
