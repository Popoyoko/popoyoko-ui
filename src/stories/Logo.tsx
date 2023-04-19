import "./logo.css";
import React from 'react';

interface LogoProps {
    src: string;
}

export const Logo: React.FC<LogoProps> = ({
    src
}) => {
    return (
        <div className="logo">
            <img src={src}></img>
        </div>
    );
};
