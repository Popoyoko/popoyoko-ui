import React from "react";
import styled from 'styled-components';

interface TextProps {
  title: string;
  description: string;
}

const TextLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  overflow-y: scroll;
  width: 19.5rem;
  height: 18rem;
`;

const TextTitle = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
`;

const TextDescription = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 0px;
  isolation: isolate;
  font-family: 'sans-serif';
  text-align: start;
`;

export const Text = ({ title, description}: TextProps) => {
  return (
    <TextLayout>
      <TextTitle>{title}</TextTitle>
      <TextDescription>{description}</TextDescription>
    </TextLayout>
  );
};

