import React from "react";
import styled from "styled-components";

const TertiaryButton = styled.button`
  background: #f8f8f8;
  border-radius: 2px;
  color: #1b6042;
  border: 2px #f8f8f8;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;

  &:hover {
    background: #ffffff;
    color: #228c53;
    border: 2px #ffffff;
  }

  &:active {
    background: #e4e4e4;
    border: 2px dashed #153f33;
    color: #153f33;
  }

  &:disabled {
    background: rgba(119, 119, 119, 0.11);
    border: 2px dashed rgba(33, 193, 103, 0.11);
    color: rgba(33, 193, 103, 0.11);
  }
`;

interface TertiaryProps {
  typeSvg?: "none" | "left" | "right" | "only";
  label?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Tertiary = ({
  label,
  typeSvg,
  children,
  onClick,
}: TertiaryProps) => {
  return (
    <TertiaryButton onClick={onClick}>
      {typeSvg === "left" && children}
      {label}
      {typeSvg === "right" && children}
    </TertiaryButton>
  );
};
