import React from "react";
import { Link } from 'react-router-dom';

import "./DownloadFile.scss";

import DownloadFileComponent from "./DownloadFile.component";

export class DownloadFile extends React.Component {
    
    downloadFile = () => {
        fetch("https://patrykstanek.pl/download")
            .then(response => {
                response.blob().then(blob => {
                    let url = window.URL.createObjectURL(blob);
                    let a = document.createElement('a');
                    a.href = url;
                    a.download = "../../CV.pdf";
                    a.click();
                });
            })
    }

    render() {
        return (
            <Link 
                to="./assets/CV Patryk Stanek.pdf" 
                target="_blank" 
                download
                className="download"
            >
                <DownloadFileComponent />
            </Link>
        )
    }
}