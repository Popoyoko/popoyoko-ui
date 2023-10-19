import React from "react";
import styled from "styled-components";
import upload from "../../Icons/Upload/upload.svg";
import { Icon } from "../Icon";

interface SectionProps {
  title?: string;
  label?: string;
}

const ContainerSection = styled.div`
  display: flex;
  padding: 32px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const Title = styled.h2`
  margin: 0;
  color: #000;

  font-family: Co Headline;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const SectionBtn = styled.div`
  display: flex;
  padding: 32px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  border: 2px dashed #32568f;
`;

const SectionLabel = styled.p`
  margin: 0;
  font-family: "Co Headline";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 24px;
  color: #32568f;
`;

export const Section = ({
  title,
  label,
}: // ...props
SectionProps) => {
  return (
    <ContainerSection>
      <Title>{title}</Title>
      <SectionBtn>
        <Icon.Upload/>
        <SectionLabel>{label}</SectionLabel>
      </SectionBtn>
    </ContainerSection>
  );
};
