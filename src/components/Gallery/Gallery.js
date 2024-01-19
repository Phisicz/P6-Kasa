import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import styles from "./gallery.module.scss";

// Importez votre module de service (services/logementService.js) ici
import { getAllHouses } from "../../services/logementService";

const Gallery = () => {
  const [houses, setHouses] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Ajoutez une variable d'état pour le chargement

  useEffect(() => {
    // Utilisez une fonction pour obtenir les données des logements
    async function fetchData() {
      try {
        // Ici, vous pouvez remplacer cet appel fictif par l'appel à votre backend lorsque vous l'aurez
        const data = await getAllHouses(); // Utilisez la fonction du service
        setHouses(data);
         setIsLoading(false); // Indiquez que les données sont chargées
      } catch (error) {
        console.error(error);
         setIsLoading(false); // Indiquez que les données ne sont pas chargées en cas d'erreur
      }
    }

    // Appelez fetchData au moment du chargement du composant
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      {isLoading ? (
        // Affichez la div de chargement en cours
        <div className={styles.loadingContainer}>
          <span className={styles.loadingText}>Chargement en cours...</span>
          <div className={styles.loadingIcon}></div>
        </div>
      ) : (
        houses.map((location) => (
          <article key={location.id}>
            <Link to={`/logement/${location.id}`}>
              <Card image={location.cover} title={location.title} />
            </Link>
          </article>
        ))
      )}
    </div>
  );
};

export default Gallery;
