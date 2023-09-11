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

const TextInput = styled.input`
  font-family: 'Co Headline';
  font-style: normal;
  font-size: 16px;
  color: #0F082B;
  border: none;
  background: transparent;
  outline: none;
  width: 100%;
  line-height: 24px;
`;

export const InputText = ({
    placeholder,
}: InputTextProps) => {
    return (
        <InputWrapper>
            <TextInput placeholder={placeholder} />
        </InputWrapper>
    )
}
