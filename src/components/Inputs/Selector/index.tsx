import './index.css';
import React, { useState } from 'react';

interface InputSelectorProps {
    label: string;
}

export const InputSelector = ({ label }: InputSelectorProps) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleRadioClick = () => {
        setIsChecked(!isChecked);
    };

    const className = isChecked ? "dark-green" : "green";
    
    return (
        <div onClick={handleRadioClick}>
            <input type="radio" className={className} checked={isChecked} />
            <label>{label}</label>
        </div>
    );
};
