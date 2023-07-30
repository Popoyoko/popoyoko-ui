import React from 'react';
import "./index.css";
interface InputUploadProps {
    onChange: (file: File | null) => void;
    label: string;
}
declare const InputUpload: React.FC<InputUploadProps>;
export default InputUpload;
