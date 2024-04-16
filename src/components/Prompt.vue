<template>
    <div class="container">
      <input class="input-field" type="text" placeholder="Entrez du texte ici..." />
    </div>
  </template>
  
  <script setup>
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