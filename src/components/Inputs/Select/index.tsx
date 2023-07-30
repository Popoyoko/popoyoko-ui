import './index.css';
import React from 'react';

interface InputSelectProps {
    label: string;
    href: string;
    options: string[];
    anchorElement: JSX.Element;
};

export const InputSelect = ({
    label,
    href,
    options,
    anchorElement,
}: InputSelectProps) => {
    return(
        <div className="select">
            <button className="selectbtn">{label}</button>
            <div className="select-content">
            {anchorElement}
            {options.map((option, index) => (
                <a key={index} href={href}>
                {option}
                </a>
            ))}
            </div>
        </div>
    )
}