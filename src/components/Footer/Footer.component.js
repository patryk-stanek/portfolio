import React from "react";
import { useTranslation } from 'react-i18next'

const FooterComponent = () => {
    const { t } = useTranslation()

    return (
        <div className="footer__container">
            <span className="footer__text">
               {t('footer__text.label')}
            </span>
            <div className="footer__externals">
                <a
                    href="https://github.com/patryk-stanek"
                    className="footer__link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-github footer__icon"></i>
                </a>
                <a
                    href="https://www.linkedin.com/in/pstanek3/"
                    className="footer__link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-linkedin-in footer__icon"></i>
                </a>
            </div>
        </div>
    )
}

export default FooterComponent