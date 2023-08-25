import React from "react";
import styled from 'styled-components';

const RatioWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const Ratio2to3 = styled(RatioWrapper)`
  aspect-ratio: 3 / 2;
`;

export const L2H3 = ({ children }) => {
  return <Ratio2to3>{children}</Ratio2to3>;
};

L2H3.defaultProps = {
  children: null,
};

