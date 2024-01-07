import React from "react";

import { Link, NavLink, useLocation } from "react-router-dom";

import logo from "../../assets/img/Logo/logo.svg";

import styles from "./header.module.scss";

const Header = () => {
    // On utilise ce hook react routeur pour determiner que quelle page on se trouve et appliquer l'underline
    const location = useLocation();

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
        </header>
    );
};

export default Header;
