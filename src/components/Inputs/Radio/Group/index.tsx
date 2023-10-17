import React, { useState, useEffect } from "react";
import styled from "styled-components";


const RadioGroupWrapper = styled.div`
  padding: 50px;
`;

const RadioItem = styled.div``;

export interface GroupRadioProps {
    name?: string;
    value?: any;
    checked?: boolean;
    onChange?: (newValue: any) => void;
    children: React.ReactNode;
}

export const GroupRadio = ({name, value, checked, onChange, children}: GroupRadioProps) => {
    const [selectedValue, setSelectedValue] = useState(checked);

    const handleRadioClick = () => {
        setSelectedValue(!selectedValue);
    }
    

  return (
    <RadioGroupWrapper onClick={handleRadioClick}>
      {React.Children.map(children, (child, index) => (
        <RadioItem key={index}>{child}</RadioItem>
      ))}
    </RadioGroupWrapper>
  );
};
