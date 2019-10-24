import React from "react";
import { useTranslation } from 'react-i18next'

const HeaderComponent = () => {
    const { t, i18n } = useTranslation()

    return (
        <React.Fragment>
            <h1 className="header__title" >{t('header__title.label')}<span className="header__color">{t('header__title--name.label')}</span></h1>
            <span className="header__text">{t('header__text.label')}<span className="header__color">{t('header__text--city.label')}</span></span>
        </React.Fragment>
    )
}

export default HeaderComponent