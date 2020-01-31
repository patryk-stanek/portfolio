import React from "react";
import { Link } from 'react-router-dom';
import "./Footer.scss";

export class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__container container">
                    <span className="footer__text">
                        ©2020 Patryk Stanek
                    </span>
                    <div className="footer__social-box">
                        <Link 
                            to="./assets/Patryk Stanek CV.pdf" 
                            target="_blank" 
                            className="footer__social-link"
                            download
                        >
                            <i className="footer__social-icon far fa-file-pdf"></i>
                        </Link>
                        <a 
                            href="https://github.com/patryk-stanek" 
                            className="footer__social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="footer__social-icon fab fa-github"></i>
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/pstanek3/" 
                            className="footer__social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="footer__social-icon fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </footer>
        )
    }
}