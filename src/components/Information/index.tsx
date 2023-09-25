import React from "react";
import styled from "styled-components";
import { Icon } from "../Icon";

interface InformationProps {
  label?: string;
  background?: string;
}

const InformationSection = styled.div`
  display: flex;
  padding: 16px;
  align-items: flex-start;
  gap: 8px;

  border-radius: 2px;
  background: #2018b0;
  box-shadow: 0px 4px 8px -4px rgba(84, 81, 121, 0.05);
`;

const InformationContent = styled.p`
  word-wrap: break-word;
  color: #f0e8ff;
  font-family: Co Headline;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin: 0;
`;

export const Information = ({ label = "Information", background = "#2018b0" }: InformationProps) => {
  const InformationSectionWithBackground = styled(InformationSection)`
  background: ${background};
  `
  return (
    <InformationSectionWithBackground>
      <Icon.Information/>
      <InformationContent>{label}</InformationContent>
    </InformationSectionWithBackground>
  );
};
