import React from "react";
import { Icon } from "../Icon";

interface InformationProps {
  label?: string;
  background?: string;
}

export const Information = ({
  label = "Information",
}: InformationProps) => {
  return (
    <div>
      <Icon.Information />
      <p>{label}</p>
    </div>
  );
};
