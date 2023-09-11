import React, { useState } from 'react';
import styled from 'styled-components';

const RadioWrapper = styled.div`
display: flex;
padding: 4px;
align-items: center;
gap: 16px;
`

const CustomRadio = styled.input`

  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #0F082B;
  background: #F7F7F8;

  &:hover {
    background: #F7F7F8;
  }

  &:checked:before {
    display: block;
  }
`;

const Label = styled.label`
  margin-left: 8px; // Ajoutez des styles supplémentaires si nécessaire
`;

interface InputRadioProps {
    label: string;
}

export const InputRadio = ({ label }: InputRadioProps) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleRadioClick = () => {
        setIsChecked(!isChecked);
    };

    return (
        <RadioWrapper onClick={handleRadioClick}>
            <CustomRadio type="radio" checked={isChecked} />
            <Label>{label}</Label>
        </RadioWrapper>
    );
};
