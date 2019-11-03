import React from "react";
import { useTranslation } from 'react-i18next';
import Zoom from "react-reveal";
import { DownloadFile } from "../DownloadFile/DownloadFile.container";
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

const AboutComponent = () => {
    const { t } = useTranslation()

    return (
        <div className="about__content">
            <Zoom>
                <h2 className="about__heading">
                    {t('about__heading.label')}
                </h2>
                <span className="about__span">
                    {t('about__span.label')}
                </span>
                <p className="about__paragraph">
                    {t('about__paragraph--1.label')}
                </p>
                <p className="about__paragraph">
                    {t('about__paragraph--2.label')}
                </p>
                <div className="about__externals">
                    <a
                        href="https://github.com/patryk-stanek"
                        className="about__link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-github about__icon"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/pstanek3/"
                        className="about__link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-linkedin-in about__icon"></i>
                    </a>
                </div>
                <DownloadFile />
            </Zoom>
        </div>
    )
}

export default AboutComponent