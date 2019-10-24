import React from "react";
import { Link } from "react-scroll";

import "../../i18n";
import LanguageSelector from "../ChangeLanguage/i18n.changeLanguage";

import "./Menubar.scss";

export class Menubar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            class: "menubar"
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.listenScrollEvent)
    }

    listenScrollEvent = e => {
        if (window.scrollY > 70) {
            this.setState({
                class: "menubar menubar__bg"
            })
        } else {
            this.setState({
                class: "menubar"
            })
        }
    }

    render() {
        return (
            <nav className={this.state.class}>
                <span className="menubar__logo">
                    PS
                </span>
                <div className="menubar__navigation">
                    <ul className="menubar__list">
                        <li className="menubar__item">
                            <Link 
                                to="home" 
                                className="menubar__link"
                                smooth={true}
                                duration={500}
                                offset={-35}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="menubar__item">
                            <Link 
                                to="section-about" 
                                className="menubar__link"
                                smooth={true}
                                duration={500}
                            >
                                About
                            </Link>
                        </li>
                        <li className="menubar__item">
                            <Link 
                                to="section-services" 
                                className="menubar__link"
                                smooth={true}
                                duration={500}
                            >
                                Services
                            </Link>
                        </li>
                        <li className="menubar__item">
                            <Link 
                                to="section-portfolio" 
                                className="menubar__link"
                                smooth={true}
                                duration={500}
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li className="menubar__item">
                            <Link 
                                to="section-contact" 
                                className="menubar__link"
                                smooth={true}
                                duration={500}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div className="menubar__language">
                        <LanguageSelector />
                    </div>
                </div>
            </nav>
        )
    }
}