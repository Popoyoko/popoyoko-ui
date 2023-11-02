import React from "react";
import styled from "styled-components";

interface ButtonProps {
  variant?: "primary" | "secondary" | "tertiary";
  typeSvg: "none" | "left" | "right" | "only";
  label?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  value?: any;
  type?: "button" | "submit" | "reset";
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


const SpanButton = styled.span`
font-family: Co Headline;
font-size: 22px;
font-style: normal;
font-weight: 400;
line-height: normal;
`

const ButtonSvgOnly = styled(StyledButton)`
padding: 8px;
width: fit-content;
`

const Button = ({
  variant = "primary",
  label,
  typeSvg,
  children,
  onClick,
  value,
  type,
}: ButtonProps) => {
  if (typeSvg === "none") {
    return <StyledButton className={variant} type={type} onClick={onClick} value={value}><SpanButton>{label}</SpanButton></StyledButton>;
  } else if (typeSvg === "left") {
    return (
      <StyledButton className={variant} type={type} onClick={onClick} value={value}>
        {children}
        <SpanButton>{label}</SpanButton>
      </StyledButton>
    );
  } else if (typeSvg === "right") {
    return (
      <StyledButton className={variant} type={type} onClick={onClick} value={value}>
        <SpanButton>{label}</SpanButton>
        {children}
      </StyledButton>
    );
  } else if (typeSvg === "only") {
    return (
      <ButtonSvgOnly className={variant} type={type} onClick={onClick} value={value}>
        {children}
      </ButtonSvgOnly>
    );
  }
};

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
