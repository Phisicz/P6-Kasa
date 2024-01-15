import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import locationData from "../../assets/data/logements.json";
import styles from "./gallery.module.scss";

const Gallery = () => {
    return (
        <div className={styles.container}>
            {locationData.map((location) => (
                <article key={location.id}>
                    <Link to={`/logement/${location.id}`}>
                        <Card image={location.cover} title={location.title} />
                    </Link>
                </article>
            ))}
        </div>
    );
};

export default Gallery;
