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
    // <div onChange={changeLanguage} className="language-selector">
    //   <label className="language-selector__label">
    //     <input 
    //       type="radio" 
    //       value="pl" 
    //       name="language" 
    //       // defaultChecked 
    //       className="language-selector__input"
    //     />
    //     <span className="language-selector__span">
    //       PL
    //     </span>
    //   </label>
    //   <label className="language-selector__label">
    //     <input 
    //       type="radio" 
    //       value="en" 
    //       name="language" 
    //       className="language-selector__input"
    //     />
    //     <span className="language-selector__span">
    //       EN
    //     </span>
    //   </label>
    // </div>
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