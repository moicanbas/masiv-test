import { defineStore } from "pinia";

export const useComicStore = defineStore("comic", {
  state: () => ({
    urlSearch: import.meta.env.VITE_API_URL,
    comic: null,
    numberRandom: 0,
    generate: false,
    rating: null,
    viewNotFound: false,
    viewConfetti: false,
    qualifiedComics: localStorage.getItem("qualifiedComics")
      ? JSON.parse(localStorage.getItem("qualifiedComics"))
      : []
  }),
  actions: {}
});
