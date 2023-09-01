import React from "react";
import styled from "styled-components";

interface ButtonProps {
  type: "primary" | "secondary" | "tertiary";
  typeSvg: "none" | "left" | "right" | "only";
  label: string;
  srcIcon?: string;
}

const StyledButton = styled.button`
  /* Styles communs pour tous les boutons */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  width: 100%;

  /* Styles pour le bouton primary */
  &.primary {
    background-color: #191cb1;
    color: #eeebff;
    border: none;
    border-radius: 2px;
    font-family: serif;

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
  }

  /* Styles pour le bouton secondary */
  &.secondary {
    background: #f8f8f8;
    border: 2px solid #171673;
    border-radius: 2px;
    color: #171673;

    &:hover {
      background: #ffffff;
      border: 2px solid #191CB1;
      color: #191CB1;
    }

    &:active {
      background: #e4e4e4;
      border: 2px solid #111046;
      color: #111046;
    }

    &:disabled {
      border-radius: 2px;
      border: 2px dashed rgba(0, 35, 252, 0.11);
      background: rgba(112, 112, 119, 0.11);
    }
  }

  /* Styles pour le bouton tertiary */
  &.tertiary {
    background: #f8f8f8;
    border-radius: 2px;
    color: #1b6042;
    border: 2px #f8f8f8;

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
  }
`;

const Button = ({
  type = "primary",
  label,
  typeSvg,
  srcIcon,
}: ButtonProps) => {
  if (typeSvg === "none") {
    return <StyledButton className={type}>{label}</StyledButton>;
  } else if (typeSvg === "left") {
    return (
      <StyledButton className={type}>
        <img src={srcIcon} alt="Icon" />
        {label}
      </StyledButton>
    );
  } else if (typeSvg === "right") {
    return (
      <StyledButton className={type}>
        {label}
        <img src={srcIcon} alt="Icon" />
      </StyledButton>
    );
  } else if (typeSvg === "only") {
    return (
      <StyledButton className={type}>
        <img src={srcIcon} alt="Icon" />
      </StyledButton>
    );
  }
};

Button.Primary = (props: Omit<ButtonProps, "type">) => {
  return <Button type="primary" {...props} />;
};

Button.Secondary = (props: Omit<ButtonProps, "type">) => {
  return <Button type="secondary" {...props} />;
};

Button.Tertiary = (props: Omit<ButtonProps, "type">) => {
  return <Button type="tertiary" {...props} />;
};

export default Button;
