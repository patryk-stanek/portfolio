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
                    <nav className="menubar__navigation">
                        <input 
                            type="checkbox"
                            class="menubar__checkbox"
                            id="navigation-toggle"
                        />
                        <label
                            for="navigation-toggle"
                            class="menubar__button"
                        >  
                            <span class="menubar__icon">&nbsp;</span>
                        </label>
                        <ul className="menubar__list">
                            <li className="menubar__item">
                                <a 
                                    className="menubar__link"
                                    href="#home"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="menubar__item">
                                <a 
                                    className="menubar__link"
                                    href="#section-about"
                                >
                                    About
                                </a>
                            </li>
                            <li className="menubar__item">
                                <a 
                                    className="menubar__link"
                                    href="#section-services"
                                >
                                    Services
                                </a>
                            </li>
                            <li className="menubar__item">
                                <a 
                                    className="menubar__link"
                                    href="#section-portfolio"
                                >
                                    Portfolio
                                </a>
                            </li>
                            <li className="menubar__item">
                                <a 
                                    className="menubar__link"
                                    href="#section-contact"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}