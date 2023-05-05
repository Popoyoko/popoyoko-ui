import './InputSelector.css';
import React from 'react';

interface InputSelectorProps {
    active: boolean;
    hover: boolean;
    label: string;
}

export const InputSelector = ({
    active,
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
        <div className='div-selector'>
            <label>
                <input type="checkbox" id="case-a-cocher"></input>
                {label}
                </label>
        </div>
    )
}