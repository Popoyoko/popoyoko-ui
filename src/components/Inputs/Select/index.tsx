import React from "react";
import styled from "styled-components";

interface InputSelectProps {
  label?: string;
  options: (string | { label: string; value: string | number })[];
  name?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
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

export const InputSelect = ({
  label,
  options,
  name,
  value,
  onChange,
}: InputSelectProps) => {
  return (
    <SelectWrapper>
      <SelectLabel>{label}</SelectLabel>
      <SelectInput value={value} onChange={onChange} name={name}>
        {options.map((option, index) => (
          <option
            key={index}
            value={typeof option === "object" ? option.value : option}
          >
            {typeof option === "object" ? option.label : option}
          </option>
        ))}
      </SelectInput>
    </SelectWrapper>
  );
};
