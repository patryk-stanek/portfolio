import React from 'react'
import { useTranslation } from 'react-i18next'

import "./i18n.changeLanguage.scss";

const LanguageSelector = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (event) => {
    i18n.changeLanguage(event)
  }

  const flagPL = "../../assets/flags/pl.png";
  const flagEN = "../../assets/flags/en.png";

  return (
    <div className="language-selector">
      <button onClick={() => changeLanguage("pl")}>
        <img 
          src={flagPL}
          alt="flagpl"
        />
      </button>
      <button onClick={() => changeLanguage("en")}>
        <img 
          src={flagEN}
          alt="flagen"
        />
      </button>
    </div>
  )
}

export default LanguageSelector