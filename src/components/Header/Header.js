import React from "react";

import "./Header.scss"

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
                            <h1 className="header__title" >Hello, I'm <span className="header__color">Patryk Stanek</span></h1>
                            <span className="header__text">I'm Front End Developer based in <span className="header__color">Wroclaw</span></span>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}