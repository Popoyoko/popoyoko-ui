import "./index.css";
import React from 'react';

interface LogoProps {
    src: string;
}

const Logo: React.FC<LogoProps> = ({
    src
}) => {
    return (
        <div className="logo">
            <img src={src}></img>
        </div>
    );
};

export default Logo