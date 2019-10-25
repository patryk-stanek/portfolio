import React from "react";
import { useTranslation } from 'react-i18next'

const FooterComponent = () => {
    const { t } = useTranslation()

    return (
        <div className="footer__container">
            <span className="footer__text">
               {t('footer__text.label')}
            </span>
        </div>
    )
}

export default FooterComponent