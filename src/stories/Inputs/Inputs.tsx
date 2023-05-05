import './Inputs.css';
import React from 'react';

interface InputProps {
    typeInput: 'selector' | 'upload' | 'picture' | 'scrolling' | 'calendar' | 'placeholder' | 'research';
    label: string;
    srcIcon?: string;
    href?: string;
    onClick?: () => void;
}

export const Input:React.FC<InputProps> = ({
    typeInput,
    label,
    srcIcon,
    href,
    onClick,
}) => {
    if(typeInput === 'selector'){
        return(
            <div><p>test</p></div>
        );

    } else if(typeInput === 'upload'){
        return(
            <a href={href} download>
                <button className='download'>{label}<svg path={srcIcon}></svg></button>
            </a>
        );
    } else if(typeInput === 'picture'){
        return(
            <div><p>test</p></div>
        );
    } else if(typeInput === 'scrolling'){
        return(
            <div><p>test</p></div>
        );
    } else if(typeInput === 'calendar'){
        return(
            <div><p>test</p></div>
        );
    } else if(typeInput === 'placeholder'){
        return(
            <div><p>test</p></div>
        );
    } else if(typeInput === 'research'){
        return(
            <div><p>test</p></div>
        );
    }

}