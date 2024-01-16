import React, { createContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('fr'); // Définir la langue par défaut
    const [translations, setTranslations] = useState({
        titles: {},
        descriptions: {},
        equipments: {},
        tags: {},
        allTranslations: {}, // Ajoutez une clé pour toutes les traductions
    });

    useEffect(() => {
        if (language === 'fr') {
            // Si la langue est le français, réinitialiser les traductions
            setTranslations({
                titles: {},
                descriptions: {},
                equipments: {},
                tags: {},
                allTranslations: {}, // Réinitialisez toutes les traductions
            });
        } else {
            // Charger le fichier de traductions pour les autres langues
            import(`../translations/translations_${language}.json`)
                .then((translationsData) => {
                    const allTranslationsData = {
                        ...translationsData.default,
                    };

                    // Mettez à jour les traductions avec toutes les traductions
                    setTranslations({
                        ...translationsData.default,
                        allTranslations: allTranslationsData,
                    });
                })
                .catch(error =>
                    console.error(`Erreur lors du chargement des traductions: ${error}`)
                );
        }
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, translations }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => React.useContext(LanguageContext);
