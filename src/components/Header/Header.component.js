import React from "react";
import { useTranslation } from 'react-i18next'
import Zoom from "react-reveal"

const HeaderComponent = () => {
    const { t } = useTranslation()

    return (
        <div className="header__box">
            <Zoom>
            <h1 className="header__title" >
                {t('header__title.label')}
                <span className="header__color">
                    {t('header__title--name.label')}
                </span>
            </h1>
            <span className="header__text">
                {t('header__text.label')}
                <span className="header__color">
                    {t('header__text--city.label')}
                </span>
            </span>
            </Zoom>
        </div>
    )
}

export default HeaderComponent