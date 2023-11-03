import React from "react";
import styled from "styled-components";

import { Icon } from "../../Icon";

interface InputSearchProps {
  placeholder: string;
  onChange?: () => void;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

const SearchWrapper = styled.form`
display: flex;
padding: 12px;
justify-content: space-between;
align-items: flex-start;
gap: 4px;

border-radius: 4px;
border: 2px solid #0F082B;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
width: 100%;
`;

const SearchInput = styled.input`
color: #0F082B;
font-family: Co Headline;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;

border: none;
width: 100%;
outline: none;
`;

export const InputSearch = ({
    placeholder,
    onChange,
    onSubmit,
}: InputSearchProps) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Empêche la soumission du formulaire par défaut
        if (onSubmit) {
          onSubmit(event);
        }
      };
    return (
        <SearchWrapper onSubmit={handleSubmit}>
            <SearchInput type='search' placeholder={placeholder} onChange={onChange}></SearchInput>
            <Icon.Search/>
        </SearchWrapper>
    )
}
