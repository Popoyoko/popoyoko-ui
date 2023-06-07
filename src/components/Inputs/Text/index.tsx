import './index.css';
import React from 'react';

interface InputTextProps {
    placeholder: string;
};

const InputText = ({
    placeholder,
}: InputTextProps) => {
    return (
        <div className='text'>
            <p className='placeholder'>{placeholder}</p>
        </div>
    )
};

export default InputText;