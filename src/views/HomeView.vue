<script setup>
import Header from "@/components/Header.vue";
import PromptBox from "@/components/PromptBox.vue";
import HistoryList from "@/components/HistoryList.vue";
</script>

<template>
  <div class="home">
    <Header />
    <PromptBox />
    <HistoryList />
  </div>
</template>

<style scoped>
.home {
  background-color: #2f2e2b;
  height: 150vh;
  width: 100%;
}
</style>
