import axios from "axios";
import { defineStore } from "pinia";
import { toastErrorMessage } from "@/composables/utils";
import { generateRandomNumber, validateRating } from "@/composables/utils";

export const useComicStore = defineStore("comic", {
  state: () => ({
    urlSearch: import.meta.env.VITE_API_URL,
    comic: null,
    numberRandom: 0,
    generate: false,
    rating: null,
    viewConfetti: false,
    qualifiedComics: localStorage.getItem("qualifiedComics")
      ? JSON.parse(localStorage.getItem("qualifiedComics"))
      : [],
  }),
  actions: {
    async searchComic() {
      this.comic = null;
      this.rating = null;
      this.generate = true;
      try {
        this.numberRandom = generateRandomNumber();
        validateRating();
        const response = await axios.get(
          `${this.urlSearch}/${this.numberRandom}/info.0.json`
        );
        this.comic = response.data;
      } catch (error) {
        toastErrorMessage("An error occurred while processing the request.");
      } finally {
        this.generate = false;
      }
    },
    changeConfetti() {
      this.viewConfetti = !this.viewConfetti;
    },
  },
});
