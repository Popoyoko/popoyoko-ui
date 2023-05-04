import './buttonPrimary.css';
import React from 'react';

interface ButtonPrimaryProps {
    typeSvg: 'none' | 'left' | 'right' | 'only';
    label: string;
    srcIcon?: string;
    onClick?: () => void;
}

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
    label,
    typeSvg,
    srcIcon,
    onClick,
}) => {

    let icon = null;
    if(typeSvg === 'none'){
        return(
            <button className='buttonPrimary'>
                {label}
            </button>
        );
    } else if(typeSvg === 'left'){
        return(
            <button className='buttonPrimary'>
                <img src={srcIcon}></img>
                {label}
            </button>
        );
    } else if(typeSvg === 'right'){
        return(
            <button className='buttonPrimary'>
                {label}
                <img src={srcIcon}></img>
                </button>
        );
    } else if(typeSvg === 'only'){
        return(
            <button className='buttonPrimary'>
                <img src={srcIcon}></img>
               </button>
        );
    }
}