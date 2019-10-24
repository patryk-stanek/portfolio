import React from "react";

import "./Header.scss"

import HeaderComponent from "./Header.component";

export class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            offset: 0,
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.parallaxShift);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.parallaxShift);
    }

    parallaxShift = () => {
        this.setState({
            offset: window.pageYOffset
        });
    };

    render() {

        return (
            <header className="header" id="home">
                <div 
                    className="header__background" 
                    style={{backgroundPositionY: this.state.offset / 2}}
                >
                    <div className="header__container">
                        <div 
                            className="header__box"
                        >
                            <HeaderComponent />
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}