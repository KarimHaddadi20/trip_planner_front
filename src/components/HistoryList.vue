<!-- HistoryList -->

<template>
  <div class="container">
    <h2>Derniers itinéraires</h2>

    <div class="history" v-for="(item, i) in prompts" :key="i">
      <router-link
        class="history2"
        :to="{ name: 'trips', params: { id: item.id } }"
      >
        {{ item.prompt }}
      </router-link>
      <div class="svg-container">
        <svg
          @click="deletePrompt(item.id)"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.66944 1.77984L8.62265 0.733047L5.16846 4.18724L1.71427 0.733047L0.66748 1.77984L4.12167 5.23403L0.66748 8.68822L1.71427 9.73501L5.16846 6.28082L8.62265 9.73501L9.66944 8.68822L6.21525 5.23403L9.66944 1.77984Z"
            fill="#CECECE"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import usePrompts from "../utils/usePrompts.js";

const { prompts, fetchPrompts, deletePrompt } = usePrompts();

onMounted(fetchPrompts);
</script>

<style scoped>
.svg-container {
  float: right;
}
.container {
  margin-top: 2%;
}

h2 {
  font-family: "Inter";
  color: #958f7e;
  font-size: 1.2rem;
}

.history {
  background: #262522;
  border-radius: 10px; 
  padding: 10px;
  margin-bottom: 10px;
  color: white; 
}

.history2 {
  text-decoration: none; 
  color: white;
}

/* Tablet */
@media (max-width: 768px) {
  .container {
    margin-top: 2%;
  }

  h2 {
    font-size: 1rem;
    margin-left: 15px;
  }

  .history {
    padding: 15px;
    margin-bottom: 8px;
    font-size: 15px;
  }
}

/* Mobile */
@media (max-width: 480px) {
  .container {
    margin-top: 2%;
  }

  h2 {
    font-size: 0.9rem;
  }

  .history {
    padding: 15px;
    margin-bottom: 5px;
  }
}
</style>
