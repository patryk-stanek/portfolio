import React from "react";
import Fade from "react-reveal"
import { useTranslation } from 'react-i18next'

const SkillsComponent = () => {
    const { t } = useTranslation()

    return (
        <div className="skills__container">
            <Fade>
                <span className="skills__description">
                    {t('skills__description.label')}
                </span>
                <h2 className="skills__heading">
                    {t('skills__heading.label')}
                </h2>
            </Fade>
            <div className="skills__box">
                <Fade>
                    <div className="skills__slide">
                        <i className="skills__icon lnr lnr-laptop"></i>
                        <h3 className="skills__title">
                            {t('skills__title--webd.label')}
                        </h3>
                        <span className="skills__text">
                            {t('skills__text--webd.label')}
                        </span>
                    </div>
                </Fade>
                <Fade>
                    <div className="skills__slide">
                        <i className="skills__icon lnr lnr-smartphone"></i>
                        <h3 className="skills__title">
                            {t('skills__title--spa.label')}
                        </h3>
                        <span className="skills__text">
                            {t('skills__text--spa.label')}
                        </span>
                    </div>
                </Fade>
                <Fade>
                    <div className="skills__slide">
                        <i className="skills__icon lnr lnr-laptop-phone"></i>
                        <h3 className="skills__title">
                            {t('skills__title--rdw.label')}
                        </h3>
                        <span className="skills__text">
                            {t('skills__text--rdw.label')}
                        </span>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default SkillsComponent