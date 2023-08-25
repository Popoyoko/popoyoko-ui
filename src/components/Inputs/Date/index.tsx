import React from 'react';
import styled from 'styled-components';

interface InputDateProps {
  placeholder: string;
  srcIcon: string;
  onClick?: () => void;
}

const DateButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 12px;
  gap: 4px;
  width: 326px;
  height: 48px;
  background: #f7f7f8;
  border: 2px solid #0f082b;
  border-radius: 4px;
`;

const Placeholder = styled.p`
  box-sizing: border-box;
`;

const Vector = styled.svg`
  position: absolute;
  left: 3px;
  right: 4px;
  top: 2px;
  bottom: 4px;
`;

export const InputDate = ({
  placeholder,
  srcIcon,
  onClick,
}: InputDateProps) => {
  return (
    <DateButton onClick={onClick}>
      <Placeholder>{placeholder}</Placeholder>
      <Vector href={srcIcon} />
    </DateButton>
  );
};