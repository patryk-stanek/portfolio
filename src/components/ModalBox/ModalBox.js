import React from "react";
import { useTranslation } from 'react-i18next';

//Importing styles
import "./ModalBox.scss";

const ModalBox = (props) => {
    const { t } = useTranslation()

    return (
        <div className="modal">
            <div className="modal__box">
                <span>{t('modal.label')}</span>
                <button onClick={props.close}>OK</button>
            </div>
        </div>
    )
}

export default ModalBox