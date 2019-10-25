import React from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-scroll";

const MenubarComponent = () => {
    const { t } = useTranslation()

    return (
        <ul className="menubar__list">
            <li className="menubar__item">
                <Link 
                    to="home" 
                    className="menubar__link"
                    smooth={true}
                    duration={500}
                    offset={-35}
                >
                    {t('menubar__item--home.label')}
                </Link>
            </li>
            <li className="menubar__item">
                <Link 
                    to="section-about" 
                    className="menubar__link"
                    smooth={true}
                    duration={500}
                >
                    {t('menubar__item--about.label')}
                </Link>
            </li>
            <li className="menubar__item">
                <Link 
                    to="section-services" 
                    className="menubar__link"
                    smooth={true}
                    duration={500}
                >
                    {t('menubar__item--services.label')}
                </Link>
            </li>
            <li className="menubar__item">
                <Link 
                    to="section-portfolio" 
                    className="menubar__link"
                    smooth={true}
                    duration={500}
                >
                    {t('menubar__item--portfolio.label')}
                </Link>
            </li>
            <li className="menubar__item">
                <Link 
                    to="section-contact" 
                    className="menubar__link"
                    smooth={true}
                    duration={500}
                >
                    {t('menubar__item--contact.label')}
                </Link>
            </li>
        </ul>
    )
}

export default MenubarComponent