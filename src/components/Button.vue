<template>
  <div class="button-container">
    <button class="custom-button">Cliquez ici</button>
  </div>
</template>

<script>
export default {
  name: 'Button',
};
</script>
  
<style scoped>
.button-container {
  display: flex;
  justify-content: center;
}

.custom-button {
  background-color: #6D695E;
  margin-top: auto; /* This pushes the button to the bottom */
  padding: 10px 20px;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 10px; /* This adds a 10px border radius */
  margin-top: 30px;
}

/* Tablet */
@media (max-width: 768px) {
  .custom-button {
    font-size: 15px;
    padding: 10px 20px;
  }
}

/* Mobile */
@media (max-width: 480px) {
  .custom-button {
    font-size: 15px;
    padding: 10px 20px;
  }
}
</style>