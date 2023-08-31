import React from "react";
import styled from "styled-components";
import Button from "../../Button";
import Ratio from "../../Ratio"
import edit from "../../../assets/edit.svg";

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

export const Cover = ({ showedit=true, background=`url(https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg)` }: CoverProps) => {
  const backgroundImageStyle = background
    ? { backgroundImage: `url(${background})` }
    : {
        backgroundImage: `url(https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg)`,
      };

  return (
    <CoverContainer>
      <Ratio.L1H1>
      <CoverImage src={background} style={backgroundImageStyle}></CoverImage>
      {showedit && (
        <EditContainer>
          <Button.Tertiary typeSvg="right" label="Edit" srcIcon={edit} />
        </EditContainer>
      )}
      </Ratio.L1H1>
    </CoverContainer>
  );
};


