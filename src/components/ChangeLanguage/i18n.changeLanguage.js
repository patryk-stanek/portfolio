import React from 'react'
import { useTranslation } from 'react-i18next'

import "./ChangeLanguage.scss";

const LanguageSelector = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value)
  }

  return (
    <div onChange={changeLanguage} className="language">
      <input type="radio" value="en" name="language" defaultChecked /> English
      <input type="radio" value="pl" name="language"/> Polish
    </div>
  )
}

export default LanguageSelector