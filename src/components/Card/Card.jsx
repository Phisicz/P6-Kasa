import React from "react";

import styles from "./card.module.scss";

const Card = ({ image, title }) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardOverlay}>
                <img className={styles.picture} src={image} alt={title} />
                <h2 className={styles.title}>{title}</h2>
            </div>
        </div>
    );
};

export default Card;
