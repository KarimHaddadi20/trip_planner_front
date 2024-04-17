<!-- History -->

<template>
  
  <div class="container">
  <h2>Derniers itinéraires</h2>

    <div class="history" v-for="(item, i) in prompts" :key="i">
      {{ item.prompt }}
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import usePrompts from '../utils/usePrompts.js';

const { prompts, fetchPrompts } = usePrompts();

onMounted(fetchPrompts);
</script>

<style scoped>


.container {

margin-top: 2%;

}


h2 {

font-family: 'Inter';
color : #958F7E;
font-size: 1.2rem;
}


.history {
  background: #262522; /* Change this to your preferred background color */
  border-radius: 10px; /* Change this to your preferred border radius */
  padding: 10px; /* Add padding to make the text not stick to the border */
  margin-bottom: 10px; /* Add some margin to separate the prompts */
  color: white; /* Change this to your preferred text color */
}


/* Tablet */
@media (max-width: 768px) {
  .container {
    margin-top: 15%;
  }

  h2 {
    font-size: 1rem;
  }

  .history {
    padding: 8px;
    margin-bottom: 8px;
  }
}

/* Mobile */
@media (max-width: 480px) {
  .container {
    margin-top: 10%;
  }

  h2 {
    font-size: 0.8rem;
  }

  .history {
    padding: 5px;
    margin-bottom: 5px;
  }
}


</style>