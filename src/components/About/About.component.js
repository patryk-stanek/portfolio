import React from "react";
import { useTranslation } from 'react-i18next';

import { DownloadFile } from "../DownloadFile/DownloadFile.container";

const AboutComponent = () => {
    const { t } = useTranslation()

    return (
        <div className="about__content">
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
            <DownloadFile />
        </div>
    )
}

export default AboutComponent