import React, { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext"
import logo from "../../assets/img/Logo/logo.svg";
import styles from "./header.module.scss";
import { ToggleButton } from "./ToggleButton";
import LanguageButton from "./LanguageButton"; // Importez le composant LanguageButton

const Header = () => {
    // On utilise ce hook react routeur pour determiner que quelle page on se trouve et appliquer l'underline
    const location = useLocation();
    const { toggleTheme } = useContext(ThemeContext);

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
            <nav className={styles.togglenav}>
                {/* Bouton Toggle pour changer le language */}
                <LanguageButton />

                {/* Bouton Toggle pour changer le thème */}
                <ToggleButton onClick={toggleTheme} />
            </nav>
        </header>
    );
};

export default Header;
