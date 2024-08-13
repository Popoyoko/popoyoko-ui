import React from "react";
import styled from "styled-components";
import { Icon } from "../Icon";


export type ChildType =
  | React.ReactElement<typeof Icon>
  | string
  | [string, React.ReactElement<typeof Icon>]
  | [React.ReactElement<typeof Icon>, string];

export interface ButtonProps {
  variant?: "primary" | "secondary" | "tertiary";
  children: ChildType;
  action?: () => void;
  value?: string;
  type?: "button";
  disabled?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
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
      background-color: #170F354D;
      color: #170F354D;
    }
  }

  /* Styles pour le bouton secondary */
  &.secondary {
    background: #f8f8f8;
    border: 2px solid #1B6042;
    border-radius: 2px;
    color: #191CB1;

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
      background: #170F354D;
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
      border: 2px dashed #140B2533;
      color: rgba(33, 193, 103, 0.11);
    }
  }
`;

const Button = ({
  variant = "primary",
  children,
  action = () => console.log("Button as been clicked"),
  value = undefined,
  type = undefined,
  disabled = false
}: ButtonProps): React.ReactElement<typeof StyledButton> => {

  return (
    <StyledButton className={`${variant} ${disabled ? "disabled" : ""}`} onClick={disabled ? undefined : action} type={type} value={value} disabled={disabled}>
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
