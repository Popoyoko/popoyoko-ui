import './InputText.css';
import React from 'react';

interface InputTextProps {
    placeholder: string;
};

export const InputText = ({
    placeholder,
}: InputTextProps) => {
    return (
        <div className='text'>
            <p className='placeholder'>{placeholder}</p>
        </div>
    )
}