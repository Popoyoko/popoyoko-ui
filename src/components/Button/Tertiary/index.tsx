import React from 'react';
import styled from "styled-components";

const TertiaryButton = styled.button`
background: #F8F8F8;
border-radius: 2px;
color: #1B6042;
border: 2px #F8F8F8;

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 16px;
gap: 8px;

&:hover {
background: #FFFFFF;
color: #228C53;
border: 2px #FFFFFF;
}

&:active {
background: #E4E4E4;
border: 2px dashed #153F33;
color: #153F33;
}

&:disabled {
background: rgba(119, 119, 119, 0.11);
border: 2px dashed rgba(33, 193, 103, 0.11);
color: rgba(33, 193, 103, 0.11);
}
`;

interface TertiaryProps {
    typeSvg: 'none' | 'left' | 'right' | 'only';
    label: string;
    srcIcon?: string;
    onClick?: () => void;
}

export const Tertiary = ({
    label,
    typeSvg,
    srcIcon,
    onClick,
}: TertiaryProps) => {

    if(typeSvg === 'none'){
        return(
            <TertiaryButton onClick={onClick}>
                {label}
            </TertiaryButton>
        );
    } else if(typeSvg === 'left'){
        return(
            <TertiaryButton onClick={onClick}>
                <img src={srcIcon}></img>
                {label}
            </TertiaryButton>
        );
    } else if(typeSvg === 'right'){
        return(
            <TertiaryButton onClick={onClick}>
                {label}
                <img src={srcIcon}></img>
                </TertiaryButton>
        );
    } else if(typeSvg === 'only'){
        return(
            <TertiaryButton onClick={onClick}>
                <img src={srcIcon}></img>
            </TertiaryButton>
        );
    }

    return (
        <TertiaryButton onClick={onClick}></TertiaryButton>
    )
};

