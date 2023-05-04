import './buttonTertiary.css';
import React from 'react';

interface ButtonTertiaryProps {
    typeSvg: 'none' | 'left' | 'right' | 'only';
    label: string;
    srcIcon?: string;
    onClick?: () => void;
}

export const ButtonTertiary = ({
    label,
    typeSvg,
    srcIcon,
    onClick,
}: ButtonTertiaryProps) => {

    if(typeSvg === 'none'){
        return(
            <button className='buttonTertiary'>
                {label}
            </button>
        );
    } else if(typeSvg === 'left'){
        return(
            <button className='buttonTertiary'>
                <img src={srcIcon}></img>
                {label}
            </button>
        );
    } else if(typeSvg === 'right'){
        return(
            <button className='buttonTertiary'>
                {label}
                <img src={srcIcon}></img>
                </button>
        );
    } else if(typeSvg === 'only'){
        return(
            <button className='buttonTertiary'>
                <img src={srcIcon}></img>
            </button>
        );
    }

    return (
        <button className='buttonTertiary'></button>
    )
};