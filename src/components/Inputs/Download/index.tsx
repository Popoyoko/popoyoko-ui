import React from "react";
import styled from "styled-components";
import download from "../../../assets/download.svg";

interface InputDownloadProps {
  label: string;
  icon: "right" | "left";
}

const DownloadLabel = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  background: #f7f7f8;
  border: 2px dashed #171673;
  border-radius: 2px;
`;

const DownloadInput = styled.input`
  display: none;
`;

export const InputDownload = ({ label, icon }: InputDownloadProps) => {
  return (
    <form>
      <DownloadLabel htmlFor="file-input">
        {icon === "left" && <img src={download} alt="download" />}
        {label}
        {icon === "right" && <img src={download} alt="download" />}
        <DownloadInput type="file" name="file" id="file-input" />
      </DownloadLabel>
    </form>
  );
};
