import axios from "axios";
import { generateRandomNumber, validateRating, toastErrorMessage } from "@/composables/utils";
import { useComicStore } from "@/stores/store";

export const searchComic = async () => {
  const comicStore = useComicStore();
  comicStore.comic = null;
  comicStore.rating = null;
  comicStore.generate = true;
  try {
    comicStore.numberRandom = generateRandomNumber();
    validateRating();
    const response = await axios.get(
      `${comicStore.urlSearch}/${comicStore.numberRandom}/info.0.json`
    );
    comicStore.comic = response.data;
  } catch (error) {
    toastErrorMessage("An error occurred while processing the request.");
  } finally {
    comicStore.generate = false;
  }
};
