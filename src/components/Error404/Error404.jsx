import React from "react";

import { useNavigate } from "react-router-dom";

import styles from "./error404.module.scss";

const Error404 = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <p className={styles.text404}>404</p>
            <p className={styles.tagline}>
                Oups! La page que vous demandez n'existe pas.
            </p>
            <p
                className={styles.backwardLink}
                onClick={() => navigate("/home")}
            >
                Retourner sur la page d’accueil
            </p>
        </div>
    );
};

export default Error404;
