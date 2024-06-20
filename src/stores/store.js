import axios from "axios";
import { defineStore } from "pinia";
import { toastErrorMessage } from "@/composables/utils";
import { generateRandomNumber } from "@/composables/utils";

export const useComicStore = defineStore("comic", {
  state: () => ({
    urlSearch: import.meta.env.VITE_API_URL,
    comic: null,
    numberRandom: 0,
    generate: false,
    rating: null,
  }),
  actions: {
    async searchComic() {
      this.comic = null;
      try {
        this.numberRandom = generateRandomNumber();
        const response = await axios.get(
          `${this.urlSearch}/${this.numberRandom}/info.0.json`
        );
        this.comic = response.data;
      } catch (error) {
        toastErrorMessage("An error occurred while processing the request.");
      }
    },
  },
});
