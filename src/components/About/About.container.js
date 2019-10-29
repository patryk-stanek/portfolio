import React from "react";

import "./About.scss";

import AboutComponent from "./About.component";

export class About extends React.Component {
    render() {
        const imageUrl = `../../assets/images/portait.jpg`;
        
        return (
            <section className="about" id="section-about">
                <div className="about__container">
                    <div className="about__box--picture">
                        <img 
                            className="about__img"
                            src={imageUrl}
                            alt="Portrait"
                        />
                    </div>
                    <div className="about__box--text">
                        <AboutComponent />
                    </div>
                </div>
            </section>
        )
    }
}