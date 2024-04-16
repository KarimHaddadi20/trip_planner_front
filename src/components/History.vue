<template>
    <div class="container">
      <h2 class="title">Derniers itinéraires</h2>
      <div class="group" v-for="i in 4" :key="i"></div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .container {
    position: absolute;
    width: 90%;
    left: 5%;
    top: 522px;
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
    position: relative;
    width: 100%;
    height: 46px;
    margin-top: 20px;
    background-color: #242321;
  }
  
  @media (max-width: 768px) {
    .container {
      width: 95%;
      left: 2.5%;
    }
  }
  
  @media (max-width: 320px) {
    .group {
      height: 30px;
    }
  }
  </style>