import React, { JSX } from 'react';
import styled from 'styled-components';

interface InputSelectProps {
    label: string;
    href: string;
    options: string[];
    anchorElement: JSX.Element;
};

const SelectButton = styled.button`
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

const SelectWrapper = styled.div`
  position: relative;

  &:hover .select-content {
    display: block;
  }
`;

const SelectContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  width: 326px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const SelectOption = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #0f082b;
    color: white;
  }
`;

export const InputSelect = ({
    label,
    href,
    options,
    anchorElement,
}: InputSelectProps) => {
    return(
        <SelectWrapper>
            <SelectButton>{label}</SelectButton>
            <SelectContent>
            {anchorElement}
            {options.map((option, index) => (
                <SelectOption  key={index} href={href}>
                {option}
                </SelectOption >
            ))}
            </SelectContent>
        </SelectWrapper>
    )
}