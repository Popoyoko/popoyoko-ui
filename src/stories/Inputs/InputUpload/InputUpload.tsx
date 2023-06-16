import React, { useRef } from 'react';
import "./InputUpload.css";

interface InputUploadProps {
  onChange: (file: File | null) => void;
  label: string;
}

const InputUpload: React.FC<InputUploadProps> = ({ 
    onChange,
    label 
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    onChange(file);
  };

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <>
      <input
        type="file"
        accept=".jpg,.png,.pdf" // extensions fichiers
        style={{ display: 'none' }}
        ref={inputRef}
        onChange={handleFileChange}
      />
      <button onClick={handleClick}>{label}</button>
    </>
  );
};

export default InputUpload;