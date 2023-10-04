import React from "react";
import styled from "styled-components";

const SecondaryButton = styled.button`
  background: #f7f7f8;
  border: 2px solid #171673;
  border-radius: 2px;
  color: #1b6042;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;

  &:hover {
    background: #ffffff;
    border: 2px solid #228c53;
    color: #228c53;
  }

  &:active {
    background: #e4e4e4;
    border: 2px solid #153f33;
    color: #153f33;
  }

  &:disabled {
    background: rgba(119, 119, 119, 0.11);
    border: 2px solid rgba(33, 193, 103, 0.11);
    color: rgba(33, 193, 103, 0.11);
  }
`;

interface SecondaryProps {
  typeSvg?: "none" | "left" | "right" | "only";
  label?: string;
  children?: React.ReactNode;
}

export const Secondary = ({
  label,
  typeSvg,
  children,
}: SecondaryProps) => {
  return (
    <SecondaryButton>
      {typeSvg === "left" && children}
      {label}
      {typeSvg === "right" && children}
    </SecondaryButton>
  );
};
