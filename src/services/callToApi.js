import axios from "axios";
import {
  generateRandomNumber,
  validateComicRating,
  showErrorToast
} from "@/composables/utils";
import { useComicStore } from "@/stores/store";

export const searchNewComic = async () => {
  const comicStore = useComicStore();
  comicStore.comic = null;
  comicStore.rating = null;
  comicStore.generate = true;
  try {
    comicStore.viewNotFound = false;
    comicStore.numberRandom = generateRandomNumber();
    validateComicRating();
    const response = await axios.get(
      `${comicStore.urlSearch}/${comicStore.numberRandom}/info.0.json`
    );
    comicStore.comic = response.data;
  } catch (error) {
    comicStore.viewNotFound = true;
    showErrorToast("An error occurred while processing the request.");
  } finally {
    comicStore.generate = false;
  }
};
