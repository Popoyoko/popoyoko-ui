import './index.css';
import React from 'react';

interface InputTextProps {
    placeholder: string;
};

export const InputText = ({
    placeholder,
}: InputTextProps) => {
    return (
        <div className='input'>
            <p className='placeholder'>{placeholder}</p>
        </div>
    )
}