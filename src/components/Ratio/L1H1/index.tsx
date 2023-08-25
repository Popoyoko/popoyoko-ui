import React from "react";
import styled from 'styled-components';

const RatioWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const Ratio1to1 = styled(RatioWrapper)`
  aspect-ratio: 1 / 1;
`;

export const L1H1 = ({ children }) => {
  return <Ratio1to1>
{children}
  </Ratio1to1>;
};

L1H1.defaultProps = {
  children: null
};
