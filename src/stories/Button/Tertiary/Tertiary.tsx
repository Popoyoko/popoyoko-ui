import './Tertiary.css';
import React from 'react';

interface TertiaryProps {
    typeSvg: 'none' | 'left' | 'right' | 'only';
    label: string;
    srcIcon?: string;
    onClick?: () => void;
}

export const Tertiary = ({
    label,
    typeSvg,
    srcIcon,
    onClick,
}: TertiaryProps) => {

    if(typeSvg === 'none'){
        return(
            <button className='tertiary'>
                {label}
            </button>
        );
    } else if(typeSvg === 'left'){
        return(
            <button className='tertiary'>
                <img src={srcIcon}></img>
                {label}
            </button>
        );
    } else if(typeSvg === 'right'){
        return(
            <button className='tertiary'>
                {label}
                <img src={srcIcon}></img>
                </button>
        );
    } else if(typeSvg === 'only'){
        return(
            <button className='tertiary'>
                <img src={srcIcon}></img>
            </button>
        );
    }

    return (
        <button className='tertiary'></button>
    )
};