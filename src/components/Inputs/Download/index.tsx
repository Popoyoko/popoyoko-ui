import React from 'react';
import styled from 'styled-components';
import download from "../../../assets/download.svg";

interface InputDownloadProps {
    label: string;
    icon: "right" | "left";
};

const DownloadLabel = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  width: 326px;
  height: 54px;
  background: #f7f7f8;
  border: 2px dashed #171673;
  border-radius: 2px;
`;

const DownloadInput = styled.input`
  display: none;
`;

export const InputDownload: React.FC<InputDownloadProps & React.HTMLProps<HTMLInputElement>> = ({
    label,
    icon,
    ...props
}: InputDownloadProps) => {
    if (icon === "left") {
        return (
            <form>
                <DownloadLabel htmlFor="file-input" {...props}>
                    {label}
                    <img src={download} alt="download" />
                    <DownloadInput type="file" name="file" id="file-input" />
                </DownloadLabel>
            </form>
        );
    } else if (icon === "right") {
        return (
            <form>
                <DownloadLabel htmlFor="file-input">
                    <img src={download} alt="download" />
                    {label}
                    <DownloadInput type="file" name="file" id="file-input" />
                </DownloadLabel>
            </form>
        );
    }
};
