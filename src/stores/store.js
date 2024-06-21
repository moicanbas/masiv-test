import { defineStore } from "pinia";

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
    changeConfetti() {
      setTimeout(() => {
        this.viewConfetti = true;
      }, 100);
      this.viewConfetti = false;
    },
  },
});
