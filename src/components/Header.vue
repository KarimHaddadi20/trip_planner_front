<template>
    <div class="header">
      <span class="material-icons-outlined"> robot </span>
      <h1 class="header-title">Planificateur de voyage</h1>
      <p>générer par l'IA</p>
    </div>
  </template>
  
  <script setup></script>
  
  <style scoped>
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
  }
  
  h1 {
    color: white;
  }
  
  p {
    color: #958F7E;
    font-size: 0.8rem;
  }
  
  @media (max-width: 768px) {
    .header {
      flex-direction: column;
    }
  }
  
  @media (max-width: 320px) {
    h1 {
      font-size: 1.2rem;
    }
  
    p {
      font-size: 0.6rem;
    }
  }
  </style>