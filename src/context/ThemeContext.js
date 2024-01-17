import React, { createContext, useState, useEffect } from 'react';

// Création du Contexte
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Utilisez localStorage pour récupérer le thème actuel ou 'light' par défaut
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    // Effet pour mettre à jour la classe CSS du body et sauvegarder le thème dans localStorage
    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Fonction pour changer le thème
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
