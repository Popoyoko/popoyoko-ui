import React from "react";
import styled from "styled-components";
import { Icon } from "../Icon";
import Button from "../Button";

const ContainerStepper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StepperSection = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-between;
  padding: 0 28px;
  padding-top: 24px;
`;

const StepperTitle = styled.p`
  width: 100%;
  margin: 0;
`;

const ProgressBar = styled.div`
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
  title: string;
  backwardAction?: () => void;
}

export const Stepper = ({
  total,
  current,
  title,
}: StepperProps) => {
  const steps = [];

  for (let i = 1; i <= total; i++) {
    steps.push(
      <Step key={i} active={i <= current}>
      </Step>
    );
  }
  return (
    <ContainerStepper>
      <StepperSection>
        <StepperTitle>{title}</StepperTitle>
        <Button.Tertiary>
          <Icon.ArrowLeft size="medium" />
        </Button.Tertiary>
      </StepperSection>
      <ProgressBar>{steps}</ProgressBar>
    </ContainerStepper>
  );
};
