import React from "react";
import styled from "styled-components";

const SecondaryButton = styled.button`
  background: #f8f8f8;
  border: 2px dashed #1b6042;
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
    border: 2px dashed #228c53;
    color: #228c53;
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

interface SecondaryProps {
  typeSvg: "none" | "left" | "right" | "only";
  label: string;
  srcIcon?: string;
  onClick?: () => void;
}

export const Secondary = ({
  label,
  typeSvg,
  srcIcon,
  onClick,
}: SecondaryProps) => {
  if (typeSvg === "none") {
    return (
      <SecondaryButton onClick={onClick}>
        {label}
      </SecondaryButton>
    );
  } else if (typeSvg === "left") {
    return (
      <SecondaryButton onClick={onClick}>
        <img src={srcIcon}></img>
        {label}
      </SecondaryButton>
    );
  } else if (typeSvg === "right") {
    return (
      <SecondaryButton onClick={onClick}>
        {label}
        <img src={srcIcon}></img>
      </SecondaryButton>
    );
  } else if (typeSvg === "only") {
    return (
      <SecondaryButton onClick={onClick}>
        <img src={srcIcon}></img>
      </SecondaryButton>
    );
  }

  return <SecondaryButton onClick={onClick}></SecondaryButton>;
};