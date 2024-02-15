import React from 'react';
import styled from 'styled-components';

interface LogoProps {
    background: string;
}

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`;

const LogoImage = styled.img`
  max-height: 48px;
  max-width: 48px;
  object-fit: cover;
`;

export const Logo = ({
    background
}: LogoProps) => {
    return (
        <LogoWrapper>
            <LogoImage src={background}></LogoImage>
        </LogoWrapper>
    );
};
