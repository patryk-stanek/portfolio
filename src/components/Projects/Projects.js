import React from "react";

import "./Projects.scss"

export class Projects extends React.Component {
    render() {
        const imageUrlA = `../../images/portfolio1.jpg`;
        const imageUrlB = `../../images/portfolio2.jpg`;
        const imageUrlC = `../../images/portfolio3.jpg`;

        return (
            <section className="projects" id="section-portfolio">
                <div className="projects__container">
                    <h3 className="projects__description">
                        Portfolio
                    </h3>
                    <h2 className="projects__heading">
                        Work I have done
                    </h2>
                    <div className="projects__box">
                        <ul className="projects__menu">
                            <li className="projects__item">
                                <span className="projects__option">All</span>
                            </li>
                            <li className="projects__item">
                                <span className="projects__option">Web Design</span>
                            </li>
                            <li className="projects__item">
                                <span className="projects__option">Applications</span>
                            </li>
                        </ul>
                        <div className="projects__portfolio">
                            <div className="projects__slide">
                                <div className="projects__card projects__card--front">
                                    <div className="projects__content projects__content--front">
                                        <img 
                                            className="projects__img"
                                            src={imageUrlA}
                                            alt="Portfolio"
                                        />
                                        <span className="projects__title">
                                            Project's name
                                        </span>
                                    </div>
                                </div>
                                <div className="projects__card projects__card--back">
                                    <div className="projects__content projects__content--back projects__content--back-web">
                                        <span className="projects__type">
                                            Web Design
                                        </span>
                                        <button className="projects__button">
                                            Visit
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="projects__slide">
                                <div className="projects__card projects__card--front">
                                    <div className="projects__content projects__content--front">
                                        <img 
                                            className="projects__img"
                                            src={imageUrlB}
                                            alt="Portfolio"
                                        />
                                        <span className="projects__title">
                                            Project's name
                                        </span>
                                    </div>
                                </div>
                                <div className="projects__card projects__card--back">
                                    <div className="projects__content projects__content--back projects__content--back-app">
                                        <span className="projects__type">
                                            Application
                                        </span>
                                        <button className="projects__button">
                                            Visit
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="projects__slide">
                                <div className="projects__card projects__card--front">
                                    <div className="projects__content projects__content--front">
                                        <img 
                                            className="projects__img"
                                            src={imageUrlC}
                                            alt="Portfolio"
                                        />
                                        <span className="projects__title">
                                            Project's name
                                        </span>
                                    </div>
                                </div>
                                <div className="projects__card projects__card--back">
                                    <div className="projects__content projects__content--back projects__content--back-web">
                                        <span className="projects__type">
                                            Web Design
                                        </span>
                                        <button className="projects__button">
                                            Visit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}