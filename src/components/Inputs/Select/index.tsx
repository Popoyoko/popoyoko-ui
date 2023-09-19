import React, { useState } from "react";
import styled from "styled-components";

interface InputSelectProps {
  label: string;
  options: string[];
}

const SelectWrapper = styled.div`
  position: relative;
  display: flex;

flex-direction: column;
align-items: flex-start;
gap: 8px;
`;

const SelectLabel = styled.label`
font-family: Co Headline;
font-size: 22px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

const SelectInput = styled.select`
  width: 100%;
  padding: 12px;
  background: #f7f7f8;
  border: 2px solid #0f082b;
  border-radius: 4px;
  font-family: "Co Headline";
  font-style: normal;
  font-size: 16px;
  color: #0f082b;
  outline: none;
`;

export const InputSelect = ({ label, options }: InputSelectProps) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    undefined
  );

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <SelectWrapper>
      <SelectLabel>{label}</SelectLabel>
      <SelectInput value={selectedOption} onChange={handleSelectChange}>
        <option value="">Option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </SelectInput>
    </SelectWrapper>
  );
};
