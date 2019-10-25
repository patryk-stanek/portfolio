import React from "react";
// import { Link } from "react-scroll";

import "../../i18n";
import LanguageSelector from "../LanguageSelector/i18n.changeLanguage";

import "./Menubar.scss";

import MenubarComponent from "./Menubar.component";

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
                    <MenubarComponent />
                    <div className="menubar__language">
                        <LanguageSelector />
                    </div>
                </div>
            </nav>
        )
    }
}