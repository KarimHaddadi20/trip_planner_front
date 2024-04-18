<!-- PromptBox.vue -->
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

  <div v-if="isLoading" class="modal">
    <div class="loader">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 80 80"
      >
        <defs>
          <clipPath id="circleClip">
            <circle cx="40" cy="40" r="30" />
          </clipPath>
        </defs>

        <circle cx="40" cy="40" r="30" fill="white" />

        <g clip-path="url(#circleClip)">
          <path
            transform="translate(0, 20)"
            d="M22.026 37.678c-.244 2.958-.838 4.653.787 5.849.297.532.89 1.06.89-1.08 0-2.675 4.77-6.065 6.028-8.973 1.258-2.908-2.097-3.34-4.298-4.587-2.201-1.246-4.642.898-5.38-1.429-.739-2.326 1.38-4.42 4.49-6.181 3.109-1.762-.368-5.002 2.62-5.002 2.987 0 4.542-4.985 5.258-9.14.716-4.154-5.678-7.544-10.395-7.095C17.31.489 11.405 9.744 11.23 11.29c-.175 1.545-2.568 1.013-6.394 1.18-3.826.166-.35 6.364 2.393 4.885s4.647 1.08 5.067 4.77c.419 3.688 5.608 6.363 6.638 6.363 1.031 0 2.376 1.13 2.08 3.008-.298 1.878 1.257 3.224 1.012 6.182ZM40.614 17.479c0 2.234-2.75 1.63-2.68 5.035-2.321 3.876-1.107 6.294.858 6.896 1.965.603 3.036 1.277 4.197 5.94 1.16 4.663 4.34 1.4 5.376-1.029 1.036-2.428.982-9.697 4.215-7.747 3.232 1.95 7.126 1.028 9.823 1.028s5.911-5.815 6.161-7.092c.25-1.276 2.733-4.716 5.858-5.567 3.126-.85 2.322-2.553 0-3.811-2.322-1.26-9.465.602-10.68-2.802-1.214-3.404-4.947-2.11-7.572.62-2.626 2.731-4.876 3.086-10.056 2.182-5.179-.905-5.5 4.113-5.5 6.347Z"
            fill="#2F2E2B"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              from="0, 20"
              to="-80, 20"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>

          <path
            transform="translate(80, 20)"
            d="M22.026 37.678c-.244 2.958-.838 4.653.787 5.849.297.532.89 1.06.89-1.08 0-2.675 4.77-6.065 6.028-8.973 1.258-2.908-2.097-3.34-4.298-4.587-2.201-1.246-4.642.898-5.38-1.429-.739-2.326 1.38-4.42 4.49-6.181 3.109-1.762-.368-5.002 2.62-5.002 2.987 0 4.542-4.985 5.258-9.14.716-4.154-5.678-7.544-10.395-7.095C17.31.489 11.405 9.744 11.23 11.29c-.175 1.545-2.568 1.013-6.394 1.18-3.826.166-.35 6.364 2.393 4.885s4.647 1.08 5.067 4.77c.419 3.688 5.608 6.363 6.638 6.363 1.031 0 2.376 1.13 2.08 3.008-.298 1.878 1.257 3.224 1.012 6.182ZM40.614 17.479c0 2.234-2.75 1.63-2.68 5.035-2.321 3.876-1.107 6.294.858 6.896 1.965.603 3.036 1.277 4.197 5.94 1.16 4.663 4.34 1.4 5.376-1.029 1.036-2.428.982-9.697 4.215-7.747 3.232 1.95 7.126 1.028 9.823 1.028s5.911-5.815 6.161-7.092c.25-1.276 2.733-4.716 5.858-5.567 3.126-.85 2.322-2.553 0-3.811-2.322-1.26-9.465.602-10.68-2.802-1.214-3.404-4.947-2.11-7.572.62-2.626 2.731-4.876 3.086-10.056 2.182-5.179-.905-5.5 4.113-5.5 6.347Z"
            fill="#2F2E2B"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              from="80, 20"
              to="0, 20"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </svg>
    </div>
  </div>
  <ButtonPrimary @click="submitForm" />
</template>

<script setup>
import { ref } from "vue";
import ButtonPrimary from "./ButtonPrimary.vue";
import usePrompts from "../utils/usePrompts.js";
import { useRouter } from "vue-router";

const { addPrompt } = usePrompts();
const prompt = ref("");
const router = useRouter();

const isLoading = ref(false);

const submitForm = async () => {
  isLoading.value = true;

  console.log("submitForm called");
  const newPrompt = await addPrompt(prompt.value);
  isLoading.value = false;

  if (newPrompt) {
    router.push({
      name: "trips",
      params: { id: newPrompt.id, search: prompt.value },
    });
  }
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
}

.loader {
  width: 100px;
  height: 100px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
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
    width: 85px;
    height: 85px;
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
    width: 100px;
    height: 100px;
  }
}
</style>
