import React from "react";

import "../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

const Project = props => {
    const imageUrl = `../../assets/images/projects/p-${props.project.name}.png`;

    return (
        <div className="projects__slide">
            <h2 className="box-title-basic">
                {props.project.title}
            </h2>
            <div className="projects__card">
                <img src={imageUrl} alt={props.project.title} className="projects__img"/>
                <div className="projects__button-box">
                    <a 
                        href={props.project.url}
                        className="button-basic"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Demo
                    </a>
                    <a 
                        href={props.project.github}
                        className="button-basic"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Kod
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project