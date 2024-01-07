import React from "react";

import emptyStar from "../../assets/img/Icons/emptyStar.svg";

import styles from "./rate.module.scss";

const Rate = ({ score, rating }) => {
    // Ce tableau vide sera rempli avec les bonnes étoile, en fonction du score
    const stars = [];

    // ce composant rendra toujours au moins 5 étoiles vides
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(score);
        } else {
            stars.push(emptyStar);
        }
    }

    return (
        <div className={styles.container}>
            {stars.map((star, index) => (
                <img
                    key={index}
                    src={star}
                    alt="étoile"
                    className={styles.star}
                />
            ))}
        </div>
    );
};

export default Rate;
