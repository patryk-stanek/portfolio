import React from "react";

import "./About.scss"

export class About extends React.Component {
    render() {
        const imageUrl = `../../images/portait.jpg`;
        return (
            <section className="about" id="section-about">
                <div className="about__container">
                    <div className="about__box--image">
                        <img 
                            className="about__img"
                            src={imageUrl}
                            alt="Portrait Photo"
                        />
                    </div>
                    <div className="about__box--text">
                        <div className="about__content">
                            <h2 className="about__header">
                                About me
                            </h2>
                            <span className="about__span">
                                Front End Developer
                            </span>
                            <p className="about__paragraph">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <p className="about__paragraph">
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <button
                                className="about__button"
                            >
                                Download CV
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}