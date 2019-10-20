import React from "react";

import "./Skills.scss"

export class Skills extends React.Component {render() {
        return (
            <section className="skills">
                <div 
                    className="skills__wrap" 
                >
                    <div className="skills__container">
                        <h2 className="skills__heading">
                            What I can do
                        </h2>
                        <div className="skills__box">
                            <div className="skills__slide">
                                <i class="skills__icon lnr lnr-laptop"></i>
                                <h3 className="skills__title">
                                    Web Development
                                </h3>
                                <span className="skills__text">
                                    Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever.
                                </span>
                            </div>
                            <div className="skills__slide">
                                <i class="skills__icon lnr lnr-smartphone"></i>
                                <h3 className="skills__title">
                                    Single Page Application
                                </h3>
                                <span className="skills__text">
                                    Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever.
                                </span>
                            </div>
                            <div className="skills__slide">
                                <i class="skills__icon lnr lnr-laptop-phone"></i>
                                <h3 className="skills__title">
                                    Responsive Design
                                </h3>
                                <span className="skills__text">
                                    Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}