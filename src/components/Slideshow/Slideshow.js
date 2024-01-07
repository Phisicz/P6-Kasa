import React, { useState } from "react";

import chevron from "../../assets/img/Icons/chevronUp.svg";

import styles from "./slideshow.module.scss";

const Slideshow = ({ image, title }) => {
    // Est initialisé a 0 pour représenter la première image du tableau
    const [current, setCurrent] = useState(0);
    const length = image.length;

    /**Function pour l'image precedente */
    const prevImage = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    // Fonction qui gère l'image suivante
    const nextImage = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    return (
        <div className={styles.container}>
            {/* ce slider sert uniquement à stocker toutes les photos pour l'animation */}
            <div
                className={styles.slider}
                // style inline qui permet d'avoir un slide horizontal
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {/* on map justement pour que le slider contienne toutes les images de la location */}
                {image.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={title}
                        className={styles.picture}
                    />
                ))}
            </div>

            <div className={styles.chevrons}>
                {/* le short circuiting && permet de ne pas afficher les chevrons si il n'y qu'une image */}
                {length > 1 && (
                    <img
                        src={chevron}
                        alt="Icone chevron"
                        className={styles.chevronLeft}
                        onClick={prevImage}
                    />
                )}

                {length > 1 && (
                    <img
                        src={chevron}
                        alt="Icone chevron"
                        className={styles.chevronRight}
                        onClick={nextImage}
                    />
                )}
            </div>

            <p className={styles.count}>
                {/* Permet d'afficher "image actuelle / total" et de ne rien afficher si une seule image*/}
                {length === 1 ? null : `${current + 1}/${length}`}
            </p>
        </div>
    );
};

export default Slideshow;
