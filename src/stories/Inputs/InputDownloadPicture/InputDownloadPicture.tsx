import './InputDownloadPicture.css';
import React from 'react';

interface InputDownloadPictureProps {
    hover: boolean;
    label: string;
};

export const InputDownloadPicture = ({
    hover,
    label,
}: InputDownloadPictureProps) => {
    if(hover === true) {

        navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
        var video = document.getElementById('video') as HTMLVideoElement;
        video.srcObject = stream;
        video.play();
    })
        .catch(function(error) {
        console.log('Erreur : ' + error);
    });

// Prendre une photo
var canvas = document.getElementById('canvas') as HTMLCanvasElement;
var context = canvas.getContext('canvas');
var video = document.getElementById('video') as HTMLVideoElement;
var snap = document.getElementById('snap');

snap.addEventListener("click", function() {
  context.drawImage(video, 0, 0, 640, 480);
});
        return(
            <form>
                <label htmlFor="video">Webcam :</label>
                <video id="video" width="640" height="480"></video>
                <button id="snap">{label}</button>
                <canvas id="canvas" width="640" height="480"></canvas>
            </form>
        );
    } else if (hover === false) {
        return(
            <form>
                <input type="file" name="file"></input>
                <button type="submit">{label}</button>
            </form>
        );
    }
}

