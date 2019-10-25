import React from "react";
import { useTranslation } from 'react-i18next'

const ContactComponent = () => {
    const { t } = useTranslation()

    return (
        <div className="contact__container">
            <h3 className="contact__description">
                {t('contact__description.label')}
            </h3>
            <h2 className="contact__heading">
                {t('contact__heading.label')}
            </h2>
            <div className="contact__box">
                <form
                    className="contact__form"
                >
                    <div className="contact__line">
                        <input 
                            className="contact__input contact__input--half"
                            type="text"
                            id="name"
                            placeholder={t('contact__input--name.label')}
                            minLength="3"
                            required
                        />
                        <input 
                            className="contact__input contact__input--half"
                            type="email"
                            id="email"
                            placeholder={t('contact__input--email.label')}
                            minLength="3"
                            required
                        />
                    </div>
                    <textarea
                        className="contact__input contact__input--textarea"
                        id="message"
                        placeholder={t('contact__input--msg.label')}
                        rows="10"
                    ></textarea>
                    <button
                        className="contact__button"
                        type="submit"
                    >
                        {t('contact__button.label')}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactComponent