import React from "react";
import styled from "styled-components";

import { Icon } from "../../Icon";

interface InputSearchProps {
  placeholder: string;
  onChange?: () => void;
}

const SearchWrapper = styled.div`
display: flex;
padding: 12px;
justify-content: space-between;
align-items: flex-start;
gap: 4px;

border-radius: 4px;
border: 2px solid #0F082B;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const SearchInput = styled.input`
color: #0F082B;
font-family: Co Headline;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */

border: none;
`;

export const InputSearch = ({
    placeholder,
    onChange,
}: InputSearchProps) => {
    
    return (
        <SearchWrapper>
            <SearchInput type='search' placeholder={placeholder} onChange={onChange}></SearchInput>
            <Icon.Search/>
        </SearchWrapper>
    )
}
