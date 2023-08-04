import React, { useRef, useState } from 'react';
import "./index.css";
import upload from "../../../Icons/Upload/upload.svg";

interface InputUploadProps {
  label: string;
}

const InputUpload: React.FC<InputUploadProps> = ({ 
    label 
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setSelectedFile(file);
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
      <button onClick={handleClick}>
        {label}
        {selectedFile && selectedFile.name} {/* Affiche le nom du fichier sélectionné */}
        <img src={upload} alt='upload'></img>
      </button>
    </>
  );
};

export default InputUpload;
