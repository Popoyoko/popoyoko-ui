import React from "react";
import styled from "styled-components";
import Ratio from "../../Ratio";

export interface DefaultProps {
  media?: string;
  title?: string;
  mention?: string;
  subTitle?: string;
  price?: number;
}

const CardContainer = styled.div`
  min-width: 246px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardSection = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`;

const CardInformation = styled.div`
  display: flex;
  align-items: flex-end;
  align-self: stretch;
  justify-content: space-between;
`;

const CardGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`;

const Mention = styled.p`
  margin: 0;

  color: #353538;
  font-family: Co Headline;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const Title = styled.p`
  align-self: stretch;
  text-align: start;
  margin: 0;

  color: #1b1a23;
  font-family: Co Headline;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const SubTitle = styled.p`
  align-self: stretch;
  text-align: start;
  margin: 0;

  color: #1b1a23;
  font-family: Co Headline;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

const Price = styled.p`
  margin: 0;

  color: #171673;
  font-family: Co Headline;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Default = ({
  media = "https://imgs.search.brave.com/eHBodvumUFQ7TzAM2YRFjFbE9P2IB_VeLxS5-sesWlo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1Lzc5LzY4LzI0/LzM2MF9GXzU3OTY4/MjQ3OV9qNGpSZngw/bmwzQzh2TXJUWVZh/cEZuR1A4RWdOSGdm/ay5qcGc",
  title = "",
  mention = "",
  subTitle = "",
  price = 0,
}: DefaultProps) => {
  return (
    <CardContainer>
      <Ratio.L2H3>
        <CardImage src={media} alt={media} />
      </Ratio.L2H3>
      <CardSection>
        <CardGroup>
          <Mention>{mention}</Mention>
          <CardInformation>
            <CardGroup>
              <Title>{title}</Title>
              <SubTitle>{subTitle}</SubTitle>
            </CardGroup>
            <Price>{price}</Price>
          </CardInformation>
        </CardGroup>
      </CardSection>
    </CardContainer>
  );
};
