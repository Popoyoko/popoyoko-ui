import React from "react";
import { Icon } from "../Icon";
import  tokenfile from "../../tokens/config";

interface InformationProps {
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
