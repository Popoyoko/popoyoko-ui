import React from "react";
import styled from "styled-components";

const SmallContainer = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 1024px;
  background-size: cover;
  object-fit: cover;
`;

const Badge = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 12px;
  height: 12px;
  background: #2018B0;
  border-radius: 1024px;
`;

export interface SmallProps {
  showbadge?: boolean;
  background?: string;
}

export const Small = ({ showbadge = true, background=`url(https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg)` }: SmallProps) => {
  const backgroundImageStyle = background
    ? { backgroundImage: `url(${background})` }
    : {
        backgroundImage: `url(https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg)`,
      };

  return (
    <SmallContainer>
      <img
        className="small"
        src={background}
        style={backgroundImageStyle}
      ></img>
      {showbadge && <Badge/>}
    </SmallContainer>
  );
};
