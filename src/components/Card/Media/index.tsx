import styled from "styled-components";
import React from "react";
import Ratio from "../../Ratio";

export interface MediaProps {
  media?: string;
}

const Card = styled.div`
  padding: 0px;
  width: auto;
  min-width: 246px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Media = ({
  media = "https://imgs.search.brave.com/eHBodvumUFQ7TzAM2YRFjFbE9P2IB_VeLxS5-sesWlo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1Lzc5LzY4LzI0/LzM2MF9GXzU3OTY4/MjQ3OV9qNGpSZngw/bmwzQzh2TXJUWVZh/cEZuR1A4RWdOSGdm/ay5qcGc",
}) => {
  return (
    <Card>
      <Ratio.L2H3>
        <CardImage src={media} alt={media} />
      </Ratio.L2H3>
    </Card>
  );
};
