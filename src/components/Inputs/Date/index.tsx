import React from "react";
import styled from "styled-components";

interface InputDateProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const DateLabel = styled.label`
  font-family: Co Headline;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const DateInput = styled.input`
display: flex;
padding: 12px;
justify-content: center;
align-items: flex-start;
gap: 4px;
align-self: stretch;

border-radius: 4px;
border: 2px solid #0F082B;
background: #F7F7F8;

color: #0F082B;
font-family: Co Headline;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
`;

export const InputDate = ({ label, value, onChange }: InputDateProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <InputWrapper>
      <DateLabel>{label}</DateLabel>
      <DateInput
        type="date"
        value={value}
        onChange={handleChange}
      />
    </InputWrapper>
  );
};
