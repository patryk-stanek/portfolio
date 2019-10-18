import React from "react";

import "./Menubar.scss";

export class Menubar extends React.Component {
    render() {
        return (
            <div className="menubar">
                <div className="menubar__container">
                    <span className="menubar__logo">PS</span>
                </div>
            </div>
        )
    }
}