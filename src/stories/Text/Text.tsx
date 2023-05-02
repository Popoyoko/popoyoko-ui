import "./Text.css";
import React from 'react';

interface TextProps {
    title: string;
    description: string;
    backgroundColor?: string;
    divWidth?: string;
}
export const Text = ({
    title, 
    description,
    backgroundColor,
    divWidth
}: TextProps) => {
    const divStyle = Object.assign(
      { width: divWidth },
      { backgroundColor: backgroundColor }  
    );
    return (
        <div className="text-layout">
            <p className="text-title">{title}</p>
            <div className="text-scroll">
                <div className="background-gradient-top" style={divStyle}></div>
                    <textarea className="text-description" style={divStyle}>{description}</textarea>
                <div className="background-gradient-bot" style={divStyle}></div>
            </div>
        </div>
    );
};