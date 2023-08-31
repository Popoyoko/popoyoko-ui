import React from "react";
import { Logo } from "../Logo";
import { InputSearch } from "../Inputs/Search";
import Avatar from "../Avatar";
import styled from "styled-components";

const ContainerHeader = styled.div`
  display: flex;
`;

// interface HeaderProps {}

export const Header = () => {
  return (
    <ContainerHeader>
      <Logo src=""></Logo>
      <InputSearch placeholder=""></InputSearch>
      <Avatar.Small></Avatar.Small>
    </ContainerHeader>
  );
};
