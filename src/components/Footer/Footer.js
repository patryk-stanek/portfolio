import React from "react";

import "./Footer.scss"

export class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__background-image">
                    <div className="footer__background-content">
                        <div className="footer__container">
                            <span className="footer__text">All rights reserved. Patryk Stanek, 2019.</span>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}