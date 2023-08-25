import React from 'react';
import styled from 'styled-components';

interface LogoProps {
    src: string;
}

const LogoWrapper = styled.div`
  height: 32px;
  width: 32px;
  background: #D9D9D9;
  display: flex;
`;

const LogoImage = styled.img`
  max-height: 32px;
  max-width: 32px;
`;

export const Logo = ({
    src
}: LogoProps) => {
    return (
        <LogoWrapper>
            <LogoImage src={src}></LogoImage>
        </LogoWrapper>
    );
};
