import styled from "styled-components";
import React from "react";
import Ratio from "../../Ratio";

const Card = styled.div`
  padding: 0px;
  width: auto;
`;

export const Media = () => {
  return (
    <Card>
      <Ratio.L2H3></Ratio.L2H3>
    </Card>
  );
};
