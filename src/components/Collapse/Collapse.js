import React, { useState } from "react";

import chevron from "../../assets/img/Icons/chevronUp.svg";

import styles from "./collapse.module.scss";

const Collapse = ({ title, text }) => {
    // On le déclare en false car de base il est fermé
    const [isOpen, setIsOpen] = useState(false);

    // Lors du clic sur un chevron le state passe en true
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.collapse}>
            <div className={styles.blockTitle}>
                <h2 className={styles.title}>{title}</h2>
                <img
                    onClick={toggleCollapse}
                    src={chevron}
                    alt="Icone chevron"
                    className={
                        isOpen
                            ? `${styles.chevron} ${styles.rotated}`
                            : styles.chevron
                    }
                />
            </div>
            <div
                className={
                    isOpen
                        ? `${styles.blockText} ${styles.open}`
                        : styles.blockText
                }
            >
                <div
                    className={
                        isOpen ? `${styles.text} ${styles.open}` : styles.text
                    }
                >
                    {text}
                </div>
            </div>
        </div>
    );
};

export default Collapse;