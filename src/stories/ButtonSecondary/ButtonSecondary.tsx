import './buttonSecondary.css';
import React from 'react';

interface ButtonSecondaryProps {
    typeSvg: 'none' | 'left' | 'right' | 'only';
    label: string;
    srcIcon?: string;
    onClick?: () => void;
}

export const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
    label,
    typeSvg,
    srcIcon,
    onClick,
}) => {

    if(typeSvg === 'none'){
        return(
            <button className='buttonSecondary'>
                {label}
            </button>
        );
    } else if(typeSvg === 'left'){
        return(
            <button className='buttonSecondary'>
                <img src={srcIcon}></img>
                {label}
            </button>
        );
    } else if(typeSvg === 'right'){
        return(
            <button className='buttonSecondary'>
                {label}
                <img src={srcIcon}></img>
            </button>
        );
    } else if(typeSvg === 'only'){
        return(
            <button className='buttonSecondary'>
                <img src={srcIcon}></img>
            </button>
        );
    }

    return (
        <button className='buttonSecondary'></button>
    )
};