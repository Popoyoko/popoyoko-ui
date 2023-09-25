import React from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
position: relative;
  display: flex;
  align-items: flex-start;
  gap: 17px;
  overflow-x: auto;
  white-space: nowrap;
  width: 100%;
  z-index: 1;
`;

const SlideItem = styled.div`
  width: 300px;
  box-sizing: border-box;
`;

interface SliderProps {
  children: React.ReactNode;
}

export const Slider = ({ children }: SliderProps) => {
  return (
    <SliderContainer>
      {React.Children.map(children, (child, index) => (
        <SlideItem key={index}>{child}</SlideItem>
      ))}
    </SliderContainer>
  );
};
