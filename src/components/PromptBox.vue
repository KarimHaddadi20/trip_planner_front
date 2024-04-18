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
  <div v-if="isLoading" class="overlay"></div>

  <div v-if="isLoading" class="loader"></div>
  <ButtonPrimary @click="submitForm" />
</template>

<script setup>
import { ref } from "vue";
import ButtonPrimary from "./ButtonPrimary.vue";
import usePrompts from "../utils/usePrompts.js";
import { useRouter } from 'vue-router';


const { addPrompt } = usePrompts();
const prompt = ref("");
const router = useRouter();

const isLoading = ref(false);

const submitForm = async () => {
  isLoading.value = true;
  

  console.log("submitForm called");
  const newPrompt = await addPrompt(prompt.value);
  isLoading.value = false;

  if (newPrompt) { // Vérifiez que newPrompt est défini avant d'accéder à ses propriétés
    router.push({ name: 'trips', params: { id: newPrompt.id, search: prompt.value } });
  }
};
</script>

<style scoped>
.loader {
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #2F2E2B;
  width: 90px;
  height: 90px;
  animation: spin 2s linear infinite;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0);
  filter: blur(8px);
  z-index: 999;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

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

  .loader {
    width: 80px;
    height: 80px;
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

  .loader {
    width: 40px;
    height: 40px;
  }
}
</style>