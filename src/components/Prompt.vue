<!-- Prompt.vue -->

<template>
  <div class="container">
    <input
      v-model="prompt"
      class="input-field"
      type="text"
      placeholder="Entrez du texte ici..."
    />
    <div class="prompt" v-for="(item, i) in prompts" :key="i">
      {{ item.prompt }}
    </div>
  </div>
  <Button @click="submitForm" />
</template>

<script setup>
import { ref } from "vue";
import Button from "./Button.vue";
import usePrompts from "../utils/usePrompts.js";
import { useRouter } from 'vue-router';


const { addPrompt } = usePrompts();
const prompt = ref("");
const router = useRouter();


const submitForm = async () => {
  console.log("submitForm called");
  await addPrompt(prompt.value);
  router.push({ name: 'trips', params: { id: 'trip.id', search: prompt.value } });
};
</script>

<style scoped>
.container {
  background: #242321;
  border: 1px solid #968f7c;
  border-radius: 17px;
  box-sizing: border-box;
}

.input-field {
  width: 100%;
  height: 100%;
  border: none;
  padding: 4px 10px;
  box-sizing: border-box;
  background: transparent;
  color: white;
  margin: 12px;
}

.prompt {
  background-color: #242321;
}

/* Tablet */
@media (max-width: 768px) {
  .container {
    padding: 15px;
  }

  .input-field {
    font-size: 13px;
    margin: 1px;

  }

  .prompt {
    font-size: 1.2rem;
  }
}

/* Mobile */
@media (max-width: 480px) {
  .container {
    padding: 10px;
  }

  .input-field {
    font-size: 14px;
    margin: 1px;
  }

  .prompt {
    font-size: 1rem;
  }
}
</style>
