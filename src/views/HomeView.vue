<script setup>
import Header from '@/components/Header.vue'
import Prompt from '@/components/Prompt.vue'
import Button from '@/components/Button.vue'
import History from '@/components/History.vue'
</script>

<template>
  <div class="home">
    <Header />
    <Prompt />
    <Button />
    <History />
  </div>
</template>

<style scoped>
.home {
  background-color: #2F2E2B;
  height: 150vh;
  width: 100%;
}
</style>