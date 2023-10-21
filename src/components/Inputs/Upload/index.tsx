import React, { useRef, useState } from "react";
import styled from "styled-components";
import upload from "../../../Icons/Upload/upload.svg";

interface InputUploadProps {
  label: string;
  name?: string;
  acceptedExtensions?: string;
}

const ButtonUpload = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;

  background: #f7f7f8;
  border: 2px dashed #171673;
  border-radius: 2px;
  width: 100%;
`;

export const InputUpload = ({
  label,
  name,
  acceptedExtensions = ".jpg,.png,.pdf",
}: InputUploadProps) => {
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
        accept={acceptedExtensions}
        style={{ display: "none" }}
        ref={inputRef}
        onChange={handleFileChange}
      />
      <ButtonUpload onClick={handleClick} name={name}>
        {selectedFile ? selectedFile.name : label}
        <img src={upload} alt="upload"></img>
      </ButtonUpload>
    </>
  );
};
