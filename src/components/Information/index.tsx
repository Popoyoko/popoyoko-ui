import React from "react";
import styled from "styled-components";
import { Icon } from "../Icon";

interface InformationProps {
  label?: string;
}

const ContainerInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  gap: 32px;
  position: relative;
  width: calc(100% - 64px);
  width: 20rem;
  background: #ffffff;
`;

const Heading = styled.h2`
  margin: 0;
  font-family: "Co Headline";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 24px;
  color: #1d2525;
`;

const InformationSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px;
  gap: 8px;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  background: #32568f;
  box-shadow: 0px 4px 8px -4px rgba(90, 125, 129, 0.05);
  border-radius: 2px;
`;

const InformationContent = styled.div`
  word-wrap: break-word;
`;

export const Information = ({ label = "Information" }: InformationProps) => {
  return (
    <ContainerInformation>
      <Heading>Information</Heading>
      <InformationSection>
        <Icon.Information className="information-svg" />
        <InformationContent>{label}</InformationContent>
      </InformationSection>
    </ContainerInformation>
  );
};