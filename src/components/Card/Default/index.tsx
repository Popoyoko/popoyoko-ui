import React from "react";
import styled from "styled-components";
import Ratio from "../../Ratio";

export interface DefaultProps {
  label?: string;
  mention?: string;
  subTitle?: string;
  price?: number;
}

const CardContainer = styled.div`
  .card {
    padding: 0;
    width: auto;
  }

  .card-section {
    width: 100%;
  }

  .card-group {
    padding: 16px;
  }

  .card-information {
    display: flex;
    align-items: flex-end;
  }

  .card-title {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  p {
    text-align: start;
    margin: 0;
  }
`;

export const Default = ({
  label = "",
  mention = "",
  subTitle = "",
  price = 0,
}: DefaultProps) => {
  return (
    <CardContainer>
      <div className="card">
        <Ratio.L2H3></Ratio.L2H3>
      </div>
      <div className="card-section">
        <div className="card-group">
          <p>{mention}</p>
          <div className="card-information">
            <div className="card-title">
              <p>{label}</p>
              <p>{subTitle}</p>
            </div>
            {price}
          </div>
        </div>
      </div>
    </CardContainer>
  );
};