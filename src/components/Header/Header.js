import React, { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext"
import { useLanguage } from '../../context/LanguageContext';

import logo from "../../assets/img/Logo/logo.svg";
import styles from "./header.module.scss";
import { ToggleButton } from "./ToggleButton";

const Header = () => {
    // On utilise ce hook react routeur pour determiner que quelle page on se trouve et appliquer l'underline
    const location = useLocation();
    const { toggleTheme } = useContext(ThemeContext);
    const { language, setLanguage } = useLanguage();

    // Fonction pour basculer la langue
    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'fr' : 'en');
    };

    return (
        <header className={styles.container}>
            <Link to="/home">
                <img src={logo} className={styles.logo} alt="logo kasa" />
            </Link>

            <nav>
                <ul className={styles.navlist}>
                    <li className={styles.item}>
                        <NavLink
                            to="/home"
                            className={
                                location.pathname === "/home"
                                    ? `${styles.link} ${styles.active}`
                                    : styles.link
                            }
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink
                            to="/about"
                            className={
                                location.pathname === "/about"
                                    ? `${styles.link} ${styles.active}`
                                    : styles.link
                            }
                        >
                            A Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
            {/* Bouton pour changer la langue */}
            <button onClick={toggleLanguage}>
                {language === 'en' ? 'FR' : 'EN'}
            </button>
            {/* Bouton Toggle pour changer le thème */}
            <ToggleButton onClick={toggleTheme}>
                Changer de Thème
            </ToggleButton>

        </header>
    );
};

export default Header;