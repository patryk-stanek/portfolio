import React from 'react'
import { useTranslation } from 'react-i18next'

import "./i18n.changeLanguage.scss";

const LanguageSelector = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value)
  }

  return (
    <div onChange={changeLanguage} className="language-selector">
      <label className="language-selector__label">
        <input 
          type="radio" 
          value="pl" 
          name="language" 
          defaultChecked 
          className="language-selector__input"
        />
        <span className="language-selector__span">
          PL
        </span>
      </label>
      <label className="language-selector__label">
        <input 
          type="radio" 
          value="en" 
          name="language" 
          className="language-selector__input"
        />
        <span className="language-selector__span">
          EN
        </span>
      </label>
    </div>
  )
}

export default LanguageSelector