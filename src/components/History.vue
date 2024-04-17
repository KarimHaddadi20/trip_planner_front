<template>
  <div class="container">
    <h2 class="title">Derniers itinéraires</h2>
    <div class="group" v-for="(prompt, i) in prompts" :key="i">
      {{ prompt.prompt }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const prompts = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/trips');
    prompts.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>

<style scoped>
.container {
  position: absolute;
  width: 90%;
  left: 5%;
  top: 1px;
  
}

.title {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #968F7C;
}

.group {
  position: absolute;
  width: 680px;
  height: 46px;
  left: 12px;
  background-color: #262522; /* Changer en fonction de la couleur d'arrière-plan souhaitée */
  border-radius: 10px; /* Changer en fonction du rayon de bordure souhaité */
  color: #FFFFFF;
  font-size: 16px;
  font-family: 'Inter'
}

.group:nth-child(1) {
  top: 559px;
}

.group:nth-child(2) {
  top: 618px;
}

.group:nth-child(3) {
  top: 677px;
}

.group:nth-child(4) {
  top: 736px;
}

/* Styles pour les tablettes */
@media (max-width: 200px) {
  .group {
    width: 80%; /* Réduire la largeur pour les tablettes */
    height: 40px; /* Réduire la hauteur pour les tablettes */
    left: 5%; /* Centrer le groupe sur la page */
  }
}

/* Styles pour les mobiles */
@media (max-width: 480px) {
  .group {
    width: 95%; /* Réduire encore plus la largeur pour les mobiles */
    height: 35px; /* Réduire encore plus la hauteur pour les mobiles */
    left: 2.5%; /* Centrer encore plus le groupe sur la page */
  }
}
</style>