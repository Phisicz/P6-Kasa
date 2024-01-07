import React from "react";

import styles from "./host.module.scss";

const Host = ({ name, picture }) => {
    // Variable qui permet de séparer le prénom et le nom pour les mettre sur une ligne différente
    const [firstName, lastName] = name.split(" ");

    return (
        <div className={styles.container}>
            <p className={styles.name}>
                {firstName} <br />
                {lastName}
            </p>
            <img
                src={picture}
                alt="Profil de l'hébergeur"
                className={styles.picture}
            />
        </div>
    );
};

export default Host;
