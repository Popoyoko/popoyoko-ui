import React from "react";
import styled from 'styled-components';
import upload from "../../Icons/Upload/upload.svg";

interface SectionProps {
  title?: string;
  label?: string;
}

const ContainerSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  gap: 16px;
`;

const Title = styled.h2`
  margin: 0;
  font-family: 'Co Headline';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
  color: #000000;
`;

const SectionBtn = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 32px;
  gap: 16px;
  border: 2px dashed #32568f;
`;

const SectionLabel = styled.p`
  margin: 0;
  font-family: 'Co Headline';
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
        <div className="section-svg">
          <img src={upload} alt="section" />
        </div>
        <SectionLabel>{label}</SectionLabel>
      </SectionBtn>
    </ContainerSection>
  );
};

