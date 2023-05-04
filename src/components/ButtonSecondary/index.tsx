import './index.css';
import React from 'react';

interface ButtonSecondaryProps {
    typeSvg: 'none' | 'left' | 'right' | 'only';
    label: string;
    srcIcon?: string;
    onClick?: () => void;
}

const ButtonSecondary = ({
    label,
    typeSvg,
    srcIcon,
    onClick,
}: ButtonSecondaryProps) => {

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

export default ButtonSecondary;