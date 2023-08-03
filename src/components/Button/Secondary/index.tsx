import './index.css';
import React from 'react';

interface SecondaryProps {
    typeSvg: 'none' | 'left' | 'right' | 'only';
    label: string;
    srcIcon?: string;
    onClick?: () => void;
}

export const Secondary = ({
    label,
    typeSvg,
    srcIcon,
    onClick,
}: SecondaryProps) => {

    if(typeSvg === 'none'){
        return(
            <button className='secondary' onClick={onClick}>
                {label}
            </button>
        );
    } else if(typeSvg === 'left'){
        return(
            <button className='secondary' onClick={onClick}>
                <img src={srcIcon}></img>
                {label}
            </button>
        );
    } else if(typeSvg === 'right'){
        return(
            <button className='secondary' onClick={onClick}>
                {label}
                <img src={srcIcon}></img>
            </button>
        );
    } else if(typeSvg === 'only'){
        return(
            <button className='secondary' onClick={onClick}>
                <img src={srcIcon}></img>
            </button>
        );
    }

    return (
        <button className='secondary' onClick={onClick}></button>
    )
};

