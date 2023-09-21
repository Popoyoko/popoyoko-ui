import React from "react";
import styled from 'styled-components';

interface TextProps {
  title: string;
  label: string;
}

const TextLayout = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;

  // overflow-y: scroll;
`;

const TextTitle = styled.p`
margin: 0; 

color: #1B1A23;
font-family: Co Headline;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 32px;
`;

const Textlabel = styled.p`
margin: 0; 

color: #1B1A23;
font-family: Co Headline;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-align: start;
`;

const Scroll = styled.div`
display: flex;
padding: 16px 0px;
flex-direction: column;
align-items: flex-start;
align-self: stretch;

max-height: 256px;
overflow-y: auto; 
`;


export const Text = ({ title, label}: TextProps) => {
  return (
    <TextLayout>
      <TextTitle>{title}</TextTitle>
      <Scroll>
      <Textlabel>{label}</Textlabel>
      </Scroll>
    </TextLayout>
  );
};

