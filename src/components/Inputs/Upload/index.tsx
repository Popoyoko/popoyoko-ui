import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import upload from "../../../Icons/Upload/upload.svg";

interface InputUploadProps {
  label: string;
}

const ButtonUpload = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 16px;
gap: 8px;

width: 326px;
height: 54px;

background: #F7F7F8;
border: 2px dashed #171673;
border-radius: 2px;
`;

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
      <ButtonUpload onClick={handleClick}>
        {label}
        {selectedFile && selectedFile.name} {/* Affiche le nom du fichier sélectionné */}
        <img src={upload} alt='upload'></img>
      </ButtonUpload>
    </>
  );
};

export default InputUpload;
