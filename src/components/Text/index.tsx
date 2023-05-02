import "./index.css";
import React from 'react';

interface TextProps {
    title: string;
    description: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Text: React.FC<TextProps> = ({title, description, onChange}) => {
    return (
        <div className="text-layout">
            <p className="text-title">{title}</p>
            <textarea value={description} onChange={onChange} className="text-description"></textarea>
        </div>
    );
};

export default Text; 