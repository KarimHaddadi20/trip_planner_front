// UsePrompts.js

import { ref } from "vue";
import axios from "axios";

const prompts = ref([]);

export default function usePrompts() {
  const fetchPrompts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/trips");
      prompts.value = response.data;
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addPrompt = async (prompt) => {
    try {
      const response = await axios.post("http://localhost:3000/trips", {
        prompt,
      });
      prompts.value.push(response.data);
      console.log(response.data);
      return response.data; 
    } catch (error) {
      console.error(error);
    }
  };

  const deletePrompt = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/trips/${id}`);
      prompts.value = prompts.value.filter((prompt) => prompt.id !== id);
    } catch (error) {
      console.error(error);
    }
  };

  return { prompts, fetchPrompts, addPrompt, deletePrompt };
}
