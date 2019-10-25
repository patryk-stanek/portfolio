import React from "react";

import "./Footer.scss";

import FooterComponent from "./Footer.component";

export class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__background-image">
                    <div className="footer__background-content">
                        <FooterComponent />
                    </div>
                </div>
            </footer>
        )
    }
}