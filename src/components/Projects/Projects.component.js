import React from "react";
import { useTranslation } from 'react-i18next'

const ProjectsComponent = () => {
    const { t } = useTranslation();
    
    const imageUrlA = `../../images/portfolio1.jpg`;
    const imageUrlB = `../../images/portfolio2.jpg`;
    const imageUrlC = `../../images/portfolio3.jpg`;

    return (
        <div className="projects__container">
            <h3 className="projects__description">
                {t('projects__description.label')}
            </h3>
            <h2 className="projects__heading">
                {t('projects__heading.label')}
            </h2>
            <div className="projects__box">
                <ul className="projects__menu">
                    <li className="projects__item">
                        <span className="projects__option">
                            {t('projects__option--all.label')}
                        </span>
                    </li>
                    <li className="projects__item">
                        <span className="projects__option">
                            {t('projects__option--webd.label')}
                        </span>
                    </li>
                    <li className="projects__item">
                        <span className="projects__option">
                            {t('projects__option--app.label')}
                        </span>
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
                                    {t('projects__title.label')}
                                </span>
                            </div>
                        </div>
                        <div className="projects__card projects__card--back">
                            <div className="projects__content projects__content--back projects__content--back-web">
                                <span className="projects__type">
                                    {t('projects__type--webd.label')}
                                </span>
                                <button className="projects__button">
                                    {t('projects__button.label')}
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
                                    {t('projects__title.label')}
                                </span>
                            </div>
                        </div>
                        <div className="projects__card projects__card--back">
                            <div className="projects__content projects__content--back projects__content--back-app">
                                <span className="projects__type">
                                    {t('projects__type--app.label')}
                                </span>
                                <button className="projects__button">
                                    {t('projects__button.label')}
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
                                    {t('projects__title.label')}
                                </span>
                            </div>
                        </div>
                        <div className="projects__card projects__card--back">
                            <div className="projects__content projects__content--back projects__content--back-web">
                                <span className="projects__type">
                                    {t('projects__type--webd.label')}
                                </span>
                                <button className="projects__button">
                                    {t('projects__button.label')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsComponent