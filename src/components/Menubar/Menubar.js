import React from "react";
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "./Menubar.scss";

export class Menubar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menubarClass: "menubar",
            wrapClass: "menubar__wrap",
            mobileMenuOpen: false
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.listenScrollEvent)
    }

    listenScrollEvent = e => {
        if (window.scrollY > 70) {
            this.setState({
                menubarClass: "menubar menubar__bg-low",
                wrapClass: "menubar__wrap menubar__wrap--low"
            })
        } else {
            this.setState({
                menubarClass: "menubar",
                wrapClass: "menubar__wrap"
            })
        }
    }

    openMobileMenu() {
        if (document.body.style.overflow !== "hidden") {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
    }

    scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        document.getElementById("navigation-toggle").checked = false; 
        document.body.style.overflow = "unset"
    }

    render() {
        return (
            <nav className={this.state.menubarClass}>
                <div className="menubar__container">
                    <div className="menubar__wrap">
                        <div className="menubar__header-box">
                            <h1 className="menubar__name">
                                Patryk Stanek
                            </h1>
                            <span className="menubar__function">
                                Junior Front-End Developer, <div className="menubar__color">Wrocław</div>
                            </span>
                        </div>
                        <div className="menubar__social-box">
                            <Link 
                                to="./assets/Patryk Stanek CV.pdf" 
                                target="_blank" 
                                className="menubar__social-link"
                                download
                            >
                                <i className="menubar__social-icon far fa-file-pdf"></i>
                            </Link>
                            <a 
                                href="https://github.com/patryk-stanek" 
                                className="menubar__social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="menubar__social-icon fab fa-github"></i>
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/pstanek3/" 
                                className="menubar__social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="menubar__social-icon fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                    <input type="checkbox" id="navigation-toggle" className="menubar__checkbox" unchecked="true"/>
                    <label
                        htmlFor="navigation-toggle"
                        className="menubar__button"
                        onClick={this.openMobileMenu.bind(this)}
                    >  
                        <span className="menubar__icon">&nbsp;</span>
                    </label>
                    <nav className="menubar__nav indicator">
                        <NavLink 
                            exact to="/"
                            className="menubar__link"
                            activeClassName="menubar__link--active"
                            onClick={this.scrollToTop.bind(this)}
                        >
                            <span className="menubar__item">
                                Start
                            </span>
                        </NavLink>
                        <NavLink 
                            exact to="/about"
                            className="menubar__link"
                            activeClassName="menubar__link--active"
                            onClick={this.scrollToTop.bind(this)}
                        >
                            <span className="menubar__item">
                                O mnie
                            </span>
                        </NavLink>
                        <NavLink 
                            exact to="/skills"
                            className="menubar__link"
                            activeClassName="menubar__link--active"
                            onClick={this.scrollToTop.bind(this)}
                        >
                            <span className="menubar__item">
                                Umiejętności
                            </span>
                        </NavLink>
                        <NavLink 
                            exact to="/portfolio"
                            className="menubar__link"
                            activeClassName="menubar__link--active"
                            onClick={this.scrollToTop.bind(this)}
                        >
                            <span className="menubar__item">
                                Portfolio
                            </span>
                        </NavLink>
                        <NavLink 
                            exact to="/contact"
                            className="menubar__link"
                            activeClassName="menubar__link--active"
                            onClick={this.scrollToTop.bind(this)}
                        >
                            <span className="menubar__item">
                                Kontakt
                            </span>
                        </NavLink>
                    </nav>
                </div>
            </nav>
        )
    }
}