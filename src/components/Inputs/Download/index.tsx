import './index.css';
import React from 'react';
import download from "../../../assets/download.svg";

interface InputDownloadProps {
    label: string;
    icon: "right" | "left";
};

export const InputDownload = ({
    label,
    icon,
}: InputDownloadProps) => {
    if (icon === "left") {
        return (
            <form>
                <label htmlFor="file-input" className="downloadbtn">
                    {label}
                    <img src={download} alt="download" />
                    <input type="file" name="file" id="file-input" />
                </label>
            </form>
        );
    } else if (icon === "right") {
        return (
            <form>
                <label htmlFor="file-input" className="downloadbtn">
                    <img src={download} alt="download" />
                    {label}
                    <input type="file" name="file" id="file-input" />
                </label>
            </form>
        );
    }
};
