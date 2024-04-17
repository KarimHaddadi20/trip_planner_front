<template>
  <div>
    <!-- Div pour la carte Leaflet -->
    <div id="map" style="height: 400px"></div>
    <!-- Affiche les détails du voyage si la donnée "trip" existe -->
    <div v-if="trip">
      <h2>
        {{ trip.prompt }}
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="35"
            height="35"
            rx="8"
            fill="#6D695E"
            style="
              fill: #6d695e;
              fill: color(display-p3 0.4273 0.4124 0.3702);
              fill-opacity: 1;
            "
          />
          <path
            d="M24.2476 7.94075L26.0368 6.15045C26.4098 5.77746 26.9157 5.56792 27.4432 5.56792C27.9707 5.56792 28.4766 5.77746 28.8496 6.15045C29.2226 6.52344 29.4321 7.02933 29.4321 7.55682C29.4321 8.0843 29.2226 8.59019 28.8496 8.96318L17.587 20.2258C17.0263 20.7861 16.3348 21.198 15.575 21.4242L12.7273 22.2727L13.5758 19.425C13.802 18.6652 14.2139 17.9737 14.7743 17.413L24.2476 7.94075ZM24.2476 7.94075L27.0455 10.7386M25.4546 18.0303V23.0682C25.4546 23.7011 25.2031 24.3081 24.7556 24.7556C24.3081 25.2031 23.7011 25.4545 23.0682 25.4545H11.9318C11.2989 25.4545 10.692 25.2031 10.2444 24.7556C9.79689 24.3081 9.54547 23.7011 9.54547 23.0682V11.9318C9.54547 11.2989 9.79689 10.6919 10.2444 10.2444C10.692 9.79687 11.2989 9.54545 11.9318 9.54545H16.9697"
            stroke="#CECECE"
            style="
              stroke: #cecece;
              stroke: color(display-p3 0.8095 0.8095 0.8095);
              stroke-opacity: 1;
            "
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </h2>

      <h3>Itinéraire</h3>

      <!-- Affiche le contenu du voyage -->
      <p>{{ trip.output }}</p>
    </div>

    <!-- Affiche un message "Loading..." si la donnée "trip" n'existe pas encore -->
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default {
  // Données du composant
  data() {
    return {
      // Donnée pour stocker le voyage
      trip: null,

      // Donnée pour stocker le nouveau "prompt" du voyage
      newPrompt: "",

      // Référence à la carte Leaflet
      map: null,
    };
  },

  // Méthode appelée lorsque le composant est créé
  async created() {
    try {
      // Récupère le voyage depuis l'API en utilisant l'ID du voyage dans l'URL
      const response = await fetch(
        `http://localhost:3000/trips/${this.$route.params.id}`
      );




      // Vérifie si la réponse est OK, sinon lève une erreur
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Convertit la réponse en JSON et stocke les données dans la donnée "trip"
      const data = await response.json();
      this.trip = data;

      // Initialise la carte Leaflet
      this.$nextTick(this.initMap); // Utilisation de $nextTick pour s'assurer que l'élément DOM est rendu
    } catch (error) {
      // Affiche l'erreur dans la console
      console.error("Fetch error:", error);
    }
  },

  // Méthodes du composant
  methods: {
    // Méthode pour mettre à jour le "prompt" du voyage
    async updateTrip() {
      try {
        // Envoie une requête PATCH à l'API pour mettre à jour le "prompt" du voyage avec le nouveau "prompt" saisi dans le formulaire
        const response = await fetch(
          `http://localhost:3000/trips/${this.$route.params.id}`,
          {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt: this.newPrompt }),
          }
        );

        // Vérifie si la réponse est OK, sinon lève une erreur
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Met à jour le "prompt" du voyage dans la donnée "trip"
        this.trip.prompt = this.newPrompt;

        // Réinitialise le champ de saisie du nouveau "prompt"
        this.newPrompt = "";
      } catch (error) {
        // Affiche l'erreur dans la console
        console.error("Fetch error:", error);
      }
    },

    // Méthode pour initialiser la carte Leaflet
    initMap() {
      // Crée une instance de carte Leaflet dans un élément avec l'ID 'map'
      this.map = L.map("map").setView([51.505, -0.09], 13);

      // Ajoute une couche de tuiles OpenStreetMap à la carte
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(this.map);

      // Ajoute un marqueur à une position spécifique sur la carte
      L.marker([51.5, -0.09])
        .addTo(this.map)
        .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
        .openPopup();
    },
  },
};
</script>

<style scoped>
/* Styles spécifiques à la carte peuvent être ajoutés ici */
#map {
  width: 100%;
}

h2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Lora";
  color: #ffffff;
  font-size: 1.5rem;
}

p {
  font-family: "Lora";
  color: #ffffff;
  font-size: 1rem;
}

h3 {
  font-family: "Lora";
  color: #958f7e;
  font-size: 1.2rem;
}

svg {
    width: 35px;
    height: 35px;
  }

/* Styles pour les tablettes */
@media (max-width: 768px) {
    #map {
      height: 300px;
    }
  
    h2 {
      font-size: 1.5rem;
      margin: 10px;
    }
  
    p {
      font-size: 1rem;
      margin: 10px;

    }
  
    h3 {
      font-size: 1rem;
      margin: 10px;

    }

    svg {
        width: 35px;
        height: 35px;
        padding-right:10px;
      }

  }
  
  /* Styles pour les mobiles */
  @media (max-width: 480px) {
    #map {
      height: 200px;
    }
  
    h2 {
      font-size: 1.5rem;
      margin: 10px;

    }
  
    p {
      font-size: 0.9rem;
      margin: 10px;

    }
  
    h3 {
      font-size: 0.9rem;
      margin: 10px;

    }
    
    svg {
        width: 35px;
        height: 35px;
        padding-right:10px;
      }
  }
</style>
