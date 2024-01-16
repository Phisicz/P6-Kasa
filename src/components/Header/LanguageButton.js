import React from "react";
import { useLanguage } from '../../context/LanguageContext';

import "./LanguageButton.scss";

const LanguageButton = () => {
    const { language, setLanguage } = useLanguage();

    // Fonction pour basculer la langue
    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'fr' : 'en');
    };

    return (
        <button className="LanguageButton" onClick={toggleLanguage}>
            {language === 'en' ? 'FR' : 'EN'}
        </button>

    );
};

export default LanguageButton;
