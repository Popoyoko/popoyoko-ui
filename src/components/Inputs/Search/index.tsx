import React from "react";
import styled from "styled-components";

import { Icon } from "../../Icon";

interface InputSearchProps {
  placeholder: string;
}

const SearchWrapper = styled.div`
  display: flex;
  padding: 12px;
  justify-content: space-between;
  align-items: flex-start;
  gap: 4px;

  border-radius: 4px;
  border: 2px solid #0f082b;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const SearchInput = styled.input`
  color: #0f082b;
  font-family: Co Headline;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */

  border: none;
`;

export const InputSearch: React.FC<
  InputSearchProps & React.HTMLProps<HTMLInputElement>
> = ({ placeholder, ...props }: InputSearchProps) => {
  return (
    <SearchWrapper {...props}>
      <SearchInput type="search" placeholder={placeholder}></SearchInput>
      <Icon.Search />
    </SearchWrapper>
  );
};
