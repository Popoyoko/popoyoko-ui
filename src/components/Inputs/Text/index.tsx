import React from 'react';
import styled from 'styled-components';

interface InputTextProps {
    label: string;
    placeholder: string;
};

const InputWrapper = styled.div`
display: flex;
min-width: 0;
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
min-width: 0;
`;

const TextInput = styled.input`
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

export const InputText: React.FC<InputTextProps & React.HTMLProps<HTMLInputElement>> = ({
    label,
    placeholder,
    ...props
}: InputTextProps) => {
    return (
        <InputWrapper>
            <SelectLabel>{label}</SelectLabel>
            <TextInput placeholder={placeholder} {...props}/>
        </InputWrapper>
    )
}
