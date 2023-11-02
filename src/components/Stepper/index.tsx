import React from "react";
import styled from "styled-components";
import { Icon } from "../Icon";

const ContainerStepper = styled.div`
  display: flex;
  height: 8px;
  padding-right: 0px;
  align-items: center;
  flex-shrink: 0;
  background: #edf1fa;
`;

interface StepProps {
  active: boolean;
}

const Step = styled.div<StepProps>`
  flex: 1;
  height: 100%;
  background: ${(props) => (props.active ? "#1B6042" : "#EDF1FA")};
`;

interface StepperProps {
  total: number;
  current: number;
  backwardAction?: () => void;
}

export const Stepper = ({ total, current, backwardAction }: StepperProps) => {
  const steps = [];

  for (let i = 1; i <= total; i++) {
    steps.push(
      <Step key={i} active={i <= current}>
        {/* You can add icons or labels for each step here */}
      </Step>
    );
  }
  return <ContainerStepper>{steps}</ContainerStepper>;
};
