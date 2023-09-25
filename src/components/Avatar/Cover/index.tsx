import React from "react";
import styled from "styled-components";
import Button from "../../Button";
import Ratio from "../../Ratio"
import { Icon } from "../../Icon";

const CoverContainer = styled.div`
  position: relative;
  width: 256px;
  height: 256px;
  background-size: cover;
  object-fit: cover;
`;

const EditContainer = styled.div`
  padding: 16px;
  gap: 16px;
  position: absolute;
  right: 0px;
  bottom: 0px;
`;

const CoverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export interface CoverProps {
  showedit?: boolean;
  background?: string;
}

export const Cover = ({ showedit=true, background=`https://imgs.search.brave.com/eHBodvumUFQ7TzAM2YRFjFbE9P2IB_VeLxS5-sesWlo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1Lzc5LzY4LzI0/LzM2MF9GXzU3OTY4/MjQ3OV9qNGpSZngw/bmwzQzh2TXJUWVZh/cEZuR1A4RWdOSGdm/ay5qcGc` }: CoverProps) => {
  const backgroundImageStyle = background
    ? { backgroundImage: `url(${background})` }
    : {
        backgroundImage: `https://imgs.search.brave.com/eHBodvumUFQ7TzAM2YRFjFbE9P2IB_VeLxS5-sesWlo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1Lzc5LzY4LzI0/LzM2MF9GXzU3OTY4/MjQ3OV9qNGpSZngw/bmwzQzh2TXJUWVZh/cEZuR1A4RWdOSGdm/ay5qcGc`,
      };

  return (
    <CoverContainer>
      <Ratio.L1H1>
      <CoverImage src={background} style={backgroundImageStyle}></CoverImage>
      {showedit && (
        <EditContainer>
          <Button.Tertiary typeSvg="right" label="Edit"><Icon.AddPicture size="medium" /></Button.Tertiary>
        </EditContainer>
      )}
      </Ratio.L1H1>
    </CoverContainer>
  );
};


