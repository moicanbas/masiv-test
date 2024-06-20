import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useComicStore = defineStore('comic', {
  state: () => ({
    urlSearch: import.meta.env.VITE_API_URL
  }),
  actions: {

  }
})
