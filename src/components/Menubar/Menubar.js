import React from "react";

import "./Menubar.scss";

export class Menubar extends React.Component {
    render() {
        return (
            <div className="menubar">
                <span className="menubar__logo">PS</span>
                <div className="menubar__controls">
                    <span className="menubar__language">
                        EN / PL
                    </span>
                    <span className="menubar__toggle">
                        MENU
                    </span>
                </div>
            </div>
        )
    }
}