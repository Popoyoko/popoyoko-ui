import './index.css';
import React from 'react';
import download from "../../../assets/download.svg";

interface InputDownloadProps {
    label: string;
    icon: "right" | "left";
};

const InputDownload = ({
    label,
    icon,
}: InputDownloadProps) => {
    if(icon === "left") {
        return (
            <form>
                <label for="file-input" class="downloadbtn">
                    {label}
                    <img  src={download} alt="download"/>
                    <input type="file" name="file" id="file-input" />
                </label>
            </form>
        );
    } else if (icon === "right") {
        return (
            <form>
                <label for="file-input" class="downloadbtn">
                    <img  src={download} alt="download"/>
                    {label}
                    <input type="file" name="file" id="file-input" />
                </label>
            </form>
        );
    }
};

export default InputDownload;