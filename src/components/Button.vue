<template>
  <button class="custom-button" @click="$emit('click')">Cliquez ici</button>
</template>

<script>
export default {
  name: 'Button',
};
</script>
  
  <style scoped>
  .custom-button {
    position: absolute;
    width: 30%;
    height: 35px;
    left: 35%;
    top: 180px;
    background-color: #6D695E;
    color: white;
    border: none;
    border-radius: 5px;
  }
  
  @media (max-width: 768px) {
    .custom-button {
      width: 50%;
      left: 25%;
    }
  }
  
  @media (max-width: 320px) {
    .custom-button {
      width: 70%;
      left: 15%;
    }
  }
  </style>