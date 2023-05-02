import "./index.css";
import React from 'react';

interface LogoProps {
    src: string;
}

const Logo = ({
    src
}: LogoProps) => {
    return (
        <div className="logo">
            <img src={src}></img>
        </div>
    );
};

export default Logo