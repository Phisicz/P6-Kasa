// services/logementService.js

import locationData from "../assets/data/logements.json"; // Importez vos données JSON ici

// Fonction pour obtenir tous les logements
export async function getAllHouses() {
  // Remplacer cette ligne par le backend si disponible
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(locationData);
    }, 1000); // Simule un délai d'attente pour le chargement des données (peut être supprimé avec un backend réel)
  });
}

// Fonction pour obtenir un logement par ID
export async function getHouseById(id) {
  // Vous pouvez implémenter cette fonction pour obtenir un logement spécifique par ID
  // Soit à partir des données en mémoire ou en faisant une requête au backend
  return new Promise((resolve) => {
    const house = locationData.find((location) => location.id === id);
    setTimeout(() => {
      resolve(house);
    }, 500); // Simule un délai d'attente pour le chargement des données (peut être supprimé avec un backend réel)
  });
}
