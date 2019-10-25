import React from "react";
import { useTranslation } from 'react-i18next';

const AboutComponent = () => {
    const { t } = useTranslation()

    return (
        <span className="download--text">
            {t('download.label')}
        </span>
    )
}

export default AboutComponent