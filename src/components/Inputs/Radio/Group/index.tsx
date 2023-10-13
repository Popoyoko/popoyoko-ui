import React, { useState, useEffect } from "react";
import styled from "styled-components";

const RadioGroupWrapper = styled.div``;

const RadioItem = styled.div``;

export interface GroupRadioProps {
    children: React.ReactNode;
}

export const GroupRadio = ({ children }: GroupRadioProps) => {
  return (
    <RadioGroupWrapper>
      {React.Children.map(children, (child, index) => (
        <RadioItem key={index}>{child}</RadioItem>
      ))}
    </RadioGroupWrapper>
  );
};
