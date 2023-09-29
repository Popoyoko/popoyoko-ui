import React from "react";
import { Icon } from "../Icon";
import popoyoko from "../../tokens/popoyoko.json"

interface InformationProps {
  label?: string;
  background?: string;
}

export const Information = ({ label = "Information", background = popoyoko.InformationSection.background }: InformationProps) => {
  return (
    <div style={popoyoko.InformationSection}>
      <Icon.Information/>
      <p style={popoyoko.InformationContent}>{label}</p>
    </div>
  );
};
