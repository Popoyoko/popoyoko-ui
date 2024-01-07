import React from "react";
import styled from "styled-components";
import { Icon } from "../Icon";

type ButtonType = "button" | "submit" | "reset";
type ChildType =
  | React.ReactElement<typeof Icon>
  | string
  | [string, React.ReactElement<typeof Icon>]
  | [React.ReactElement<typeof Icon>, string];

export interface ButtonProps {
  variant?: "primary" | "secondary" | "tertiary";
  children: ChildType;
  action?: () => void;
  actionType?: ButtonType;
  value?: any;
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
    background-color: #228C53;
    color: #eeebff;
    border: none;
    border-radius: 2px;
    font-family: serif;

    &:hover {
      background-color: #228C53;
      color: #d9ccff;
    }

    &:active {
      background-color: #228C53;
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
    border: 2px solid #1B6042;
    border-radius: 2px;
    color: #1B6042;

    &:hover {
      background: #ffffff;
      border: 2px solid #1B6042;
      color: #1B6042;
    }

    &:active {
      background: #e4e4e4;
      border: 2px solid #1B6042;
      color: #1B6042;
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
    }

    &:active {
      background: #e4e4e4;
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
  variant = "primary",
  children = "Label",
  action = () => console.log("Button as been clicked"),
  actionType = "button",
  value,
}: ButtonProps) => {
    return (
      <StyledButton className={variant} onClick={action} type={actionType} value={value}>
        {children}
      </StyledButton>
    );
  }
;

Button.Primary = (props: Omit<ButtonProps, "variant">) => {
  return <Button variant="primary" {...props} />;
};

Button.Secondary = (props: Omit<ButtonProps, "variant">) => {
  return <Button variant="secondary" {...props} />;
};

Button.Tertiary = (props: Omit<ButtonProps, "variant">) => {
  return <Button variant="tertiary" {...props} />;
};

export default Button;
