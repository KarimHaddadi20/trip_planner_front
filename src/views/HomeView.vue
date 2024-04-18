<script setup>
import Header from '@/components/Header.vue'
import PromptBox from '@/components/PromptBox.vue'
import HistoryList from '@/components/HistoryList.vue'
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
  background-color: #2F2E2B;
  height: 150vh;
  width: 100%;
}
</style>