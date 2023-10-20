import React from "react";
import styled from "styled-components";

const SmallContainer = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const Badge = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 12px;
  height: 12px;
  background: #2018b0;
  border-radius: 50%;
`;

export interface SmallProps {
  showbadge?: boolean;
  background?: string;
  onClick?: () => void;
}

export const Small = ({
  showbadge = true,
  background = `https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg`,
  onClick,
}: SmallProps) => {
  return (
    <SmallContainer onClick={onClick}>
      <AvatarImage src={background} />
      {showbadge && <Badge />}
    </SmallContainer>
  );
};
