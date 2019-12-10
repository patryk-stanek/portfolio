import React from "react";
import { Link } from 'react-router-dom';

import "./DownloadFile.scss";

import DownloadFileComponent from "./DownloadFile.component";

export class DownloadFile extends React.Component {render() {
        return (
            <Link 
                to="./assets/Patryk Stanek CV.pdf" 
                target="_blank" 
                download
                className="download"
            >
                <DownloadFileComponent />
            </Link>
        )
    }
}