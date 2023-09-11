import React, { useState } from "react";
import styled from "styled-components";

interface InputSelectProps {
  label: string;
  options: string[];
}

const SelectWrapper = styled.div`
  position: relative;
`;

const SelectLabel = styled.label`
  display: block;
  font-family: "Co Headline";
  font-style: normal;
  font-size: 16px;
  color: #0f082b;
  margin-bottom: 4px;
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
      <SelectInput value={selectedOption} onChange={handleSelectChange}>
        <option value="">{label}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </SelectInput>
    </SelectWrapper>
  );
};
