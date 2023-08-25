import React from 'react';
import styled from 'styled-components';

interface InputTextProps {
    placeholder: string;
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 4px;
  padding: 12px;
  background: #F7F7F8;
  border: 2px solid #0F082B;
  border-radius: 4px;
`;

const Placeholder = styled.p`
  font-family: 'Co Headline';
  font-style: normal;
  font-size: 16px;
  color: #0F082B;
  margin: 0;
`;

export const InputText = ({
    placeholder,
}: InputTextProps) => {
    return (
        <InputWrapper>
            <Placeholder>{placeholder}</Placeholder>
        </InputWrapper>
    )
}