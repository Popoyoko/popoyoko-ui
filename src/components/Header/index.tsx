import React from "react";
import { Logo } from "../Logo";
import { InputSearch } from "../Inputs/Search";
import Avatar from "../Avatar";
import styled from "styled-components";

const ContainerHeader = styled.div`
  display: flex;
  padding: 48px 16px 16px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

interface HeaderProps {
  logoBackground?: string;
  avatarBackground?: string;
}

export const Header = ({ logoBackground, avatarBackground }: HeaderProps) => {
  return (
    <ContainerHeader>
      <Logo background={logoBackground}></Logo>
      <InputSearch placeholder=""></InputSearch>
      <Avatar.Small background={avatarBackground}></Avatar.Small>
    </ContainerHeader>
  );
};
