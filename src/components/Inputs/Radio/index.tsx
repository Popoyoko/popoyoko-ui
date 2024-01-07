import React, { useId } from "react";
import styled from "styled-components";

interface InputRadioProps {
  label: string;
  name?: string;
  value?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

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
  font-family: Co Headline;R
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  word-break: break-word;
  text-align: start;
`;

export const InputRadio = ({ label, name, value, checked, onChange }: InputRadioProps) => {
  const id = useId()

  return (
    <RadioWrapper>
      <CustomRadio type="radio" id={id} onChange={onChange} checked={checked} name={name} value={value}/>
      <Label htmlFor={id}>{label}</Label>
    </RadioWrapper>
  );
};
