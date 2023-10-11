import React, { useState } from "react";
import styled from "styled-components";

const RadioWrapper = styled.div`
  display: flex;
  padding: 4px;
  align-items: center;
  gap: 16px;
`;

const CustomRadio = styled.input`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #0f082b;
  background: #f7f7f8;

  &:hover {
    background: #f7f7f8;
  }

  &:checked:before {
    display: block;
  }
`;

const Label = styled.label`
  color: #1b1a23;
  font-family: Co Headline;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  word-break: break-word;
  text-align: start;
`;

interface InputRadioProps {
  label: string;
  name?: string;
  value?: any;
}

export const InputRadio = ({ label, name, value }: InputRadioProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleRadioClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <RadioWrapper onClick={handleRadioClick}>
      <CustomRadio type="radio" checked={isChecked} name={name} value={value}/>
      <Label>{label}</Label>
    </RadioWrapper>
  );
};
