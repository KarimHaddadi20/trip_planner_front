<template>
  <div class="button-container">
    <button class="custom-button">C'est parti</button>
  </div>
</template>

<script>
export default {
  name: "Button",
};
</script>

<style scoped>
.button-container {
  display: flex;
  justify-content: center;
}

.custom-button {
  background-color: #6d695e;
  margin-top: auto; 
  padding: 10px 20px;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
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
