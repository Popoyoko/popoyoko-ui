import "./Logo.css";
import React from 'react';

interface LogoProps {
    src: string;
}

export const Logo = ({
    src
}: LogoProps) => {
    return (
        <div className="logo">
            <img src={src}></img>
        </div>
    );
};