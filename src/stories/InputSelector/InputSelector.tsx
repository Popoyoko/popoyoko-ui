import './InputSelector.css';
import React from 'react';

interface InputSelectorProps {
    hover: boolean;
    label: string;
};

export const InputSelector = ({
    hover,
    label,
}: InputSelectorProps) => {
    let className;
    if(hover === true){
        className = "dark-green";
    } else if(hover === false){
        className = "green";
    }
    
    return(
        <div>
            <input type="radio" className={className}/>
            <label>{label}</label>
        </div>
    );
};
