import React from "react";

import "./DownloadFile.scss";

import DownloadFileComponent from "./DownloadFile.component";

export class DownloadFile extends React.Component {
    constructor(props) {
        super(props);
    }

    downloadFile = () => {
        fetch("https://patrykstanek.pl/download")
            .then(response => {
                response.blob().then(blob => {
                    let url = window.URL.createObjectURL(blob);
                    let a = document.createElement('a');
                    a.href = url;
                    a.download = "../../images/portfolio1.jpg";
                    a.click();
                });
            })
    }

    render() {
        return (
            <button
                className="download"
                onClick={this.downloadFile}
            >
                <DownloadFileComponent />
            </button>
        )
    }
}