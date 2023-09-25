import React from "react";
import styled from "styled-components";

const PrimaryButton = styled.button`
  background-color: #191cb1;
  color: #eeebff;
  border: none;
  border-radius: 2px;
  font-family: serif;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;

  &:hover {
    background-color: #0023fc;
    color: #d9ccff;
  }

  &:active {
    background-color: #171673;
    color: #f5f6ff;
  }

  &:disabled {
    background-color: rgba(0, 35, 252, 0.19);
    color: rgba(0, 35, 252, 0.29);
  }
`;

interface PrimaryProps {
  typeSvg?: "none" | "left" | "right" | "only";
  label?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Primary = ({
  label,
  typeSvg,
  children,
  onClick,
}: PrimaryProps) => {
  return (
    <PrimaryButton onClick={onClick}>
      {typeSvg === "left" && children}
      {label}
      {typeSvg === "right" && children}
    </PrimaryButton>
  );
};
