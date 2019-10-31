import React from "react";
import { useTranslation } from 'react-i18next'

import "../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

const Project = props => {
    const { t } = useTranslation();
    const imageUrl = `../../assets/images/projects/p-${props.project.name}.jpg`;
    const label = props.project.type === "webd" ? t('projects__type--webd.label') : t('projects__type--app.label');
    const bgClass = props.project.type === "webd" ? `projects__content--back-web` : `projects__content--back-app`

    return (
        <div className="projects__slide">
            <div className="projects__card projects__card--front">
                <div className="projects__content projects__content--front">
                    <img 
                        className="projects__img"
                        src={imageUrl}
                        alt="Portfolio"
                    />
                    <span className="projects__title">
                        {props.project.title}
                    </span>
                </div>
            </div>
            <div className="projects__card projects__card--back">
                <div className={"projects__content projects__content--back " + bgClass}>
                    <span className="projects__type">
                        {label}
                    </span>
                    <a 
                        href={props.project.url}
                        className="projects__button"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        {t('projects__button.label')}
                    </a>
                    <a 
                        href={props.project.github}
                        className="projects__icon"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project