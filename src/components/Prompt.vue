<template>
  <div class="container">
    <input v-model="prompt" class="input-field" type="text" placeholder="Entrez du texte ici..." />
      <Button @click="submitForm" />
      <div class="group" v-for="(item, i) in prompts.slice().reverse()" :key="i">
        {{ item.prompt }}
      </div>
  </div>
</template>


<script setup>
import { ref } from 'vue';
import axios from 'axios';
import Button from './Button.vue';

const prompt = ref('');
const prompts = ref([]);

const submitForm = async () => {
  console.log('submitForm called');

  try {
    const response = await axios.post('http://localhost:3000/trips', { prompt: prompt.value });
    console.log(response.data);
    prompts.value.push(response.data); // Ajoute le prompt reçu à la liste des prompts

  } catch (error) {
    console.error(error);
  }
};
</script>

  
  <style scoped>
  .container {
    position: absolute;
    width: 80%;
    height: 140px;
    left: 10%;
    top: 254px;
    background: #242321;
    border: 1px solid #968F7C;
    border-radius: 17px;
    box-sizing: border-box;
  }
  
  .input-field {
    width: 100%;
    height: 100%;
    border: none;
    padding: 10px;
    box-sizing: border-box;
    background: transparent;
    color: white;
  }
  
  @media (max-width: 768px) {
    .container {
      width: 90%;
      left: 5%;
    }
  }
  
  @media (max-width: 320px) {
    .container {
      width: 95%;
      left: 2.5%;
    }
  }
  </style>