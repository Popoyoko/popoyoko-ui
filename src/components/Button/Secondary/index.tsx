import './index.css';
import React from 'react';

interface SecondaryProps {
    typeSvg: 'none' | 'left' | 'right' | 'only';
    label: string;
    srcIcon?: string;
    onClick?: () => void;
}

const Secondary = ({
    label,
    typeSvg,
    srcIcon,
    onClick,
}: SecondaryProps) => {

    if(typeSvg === 'none'){
        return(
            <button className='secondary'>
                {label}
            </button>
        );
    } else if(typeSvg === 'left'){
        return(
            <button className='secondary'>
                <img src={srcIcon}></img>
                {label}
            </button>
        );
    } else if(typeSvg === 'right'){
        return(
            <button className='secondary'>
                {label}
                <img src={srcIcon}></img>
            </button>
        );
    } else if(typeSvg === 'only'){
        return(
            <button className='secondary'>
                <img src={srcIcon}></img>
            </button>
        );
    }

    return (
        <button className='secondary'></button>
    )
};

export default Secondary;