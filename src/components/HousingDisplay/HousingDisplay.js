import React from "react";

import { useParams, Navigate } from "react-router-dom";

import locationData from "../../assets/data/logements.json";
import fullStar from "../../assets/img/Icons/fullStar.svg";

import Slideshow from "../Slideshow/Slideshow";
import Host from "../Host/Host";
import Tag from "../Tag/Tag";
import Rate from "../Rate/Rate";
import Collapse from "../Collapse/Collapse";

import styles from "./housingDisplay.module.scss";

const HousingDisplay = () => {
    // Pour trouver l'id du logement en question
    // useParams retourne un objet contenant les paramètres de l'URL actuelle
    const { id } = useParams();
    const data = locationData.find((location) => location.id === id);

    // Si les id de logement sont incorrects, rediriger vers la page 404
    if (!data) {
        return <Navigate replace to="/404" />;
    }

    // Bloc pour retourner à la ligne après chaque "." dans la description du collapse
    const descriptions = data.description
        .split(".")
        .filter((sentence) => sentence.trim() !== "");

    return (
        <>
            {/* Carousel */}
            <Slideshow image={data.pictures} title={data.title} />

            <div className={styles.mainContainer}>
                <div className={styles.containerOne}>
                    {/* Titre */}
                    <h2 className={styles.title}>{data.title}</h2>
                    {/* Localisation */}
                    <h3 className={styles.location}>{data.location}</h3>

                    {/* Tags */}
                    <div className={styles.tags}>
                        {data.tags.map((tag, index) => (
                            <Tag key={index} title={tag} />
                        ))}
                    </div>
                </div>

                <div className={styles.containerTwo}>
                    {/* Hote */}
                    <Host name={data.host.name} picture={data.host.picture} />

                    {/* Notes */}
                    <div className={styles.rate}>
                        <Rate
                            score={fullStar}
                            rating={parseInt(data.rating, 10)}
                        />
                    </div>
                </div>
            </div>

            {/* Collapses */}
            <div className={styles.collapse}>
                <Collapse
                    title={"Description"}
                    // on map le tableau descriptions pour rendre des span après chaque points pour revenir à la ligne
                    text={descriptions.map((sentence, index) => (
                        <React.Fragment key={index}>
                            <h3>{sentence.trim()}.</h3>
                        </React.Fragment>
                    ))}
                />

                <Collapse
                    title={"Équipements"}
                    // On encpasule dans un système de listes pour rendre l'affichage plus clair
                    text={
                        <ul>
                            {data.equipments.map((equipment) => (
                                <li key={equipment}>{equipment}</li>
                            ))}
                        </ul>
                    }
                />
            </div>
        </>
    );
};

export default HousingDisplay;