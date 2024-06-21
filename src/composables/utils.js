import { toast } from "vue3-toastify";
import { useComicStore } from "@/stores/store";

const showToastMessage = (type, message) => {
  toast[type](message, {
    position: toast.POSITION.BOTTOM_RIGHT,
    theme: "colored",
    autoClose: 3500,
    limit: 3,
  });
};

export const toastSuccessMessage = (message) =>
  showToastMessage("success", message);
export const toastErrorMessage = (message) =>
  showToastMessage("error", message);

export const generateRandomNumber = () => Math.floor(Math.random() * 5) + 1;

const storeQualifiedComics = (comics) =>
  localStorage.setItem("qualifiedComics", JSON.stringify(comics));

const getComicStore = () => {
  const comicStore = useComicStore();
  return {
    qualifiedComics: comicStore.qualifiedComics,
    numberRandom: comicStore.numberRandom,
    rating: comicStore.rating,
    comicStore,
  };
};

export const rateComics = (comic) => {
  const comicStore = getComicStore();
  comicStore.qualifiedComics.push({ id: comic.id, rating: comic.rating });
  storeQualifiedComics(comicStore.qualifiedComics);
};

export const ratingComic = () => {
  const comicStore = useComicStore();
  if (
    comicStore.qualifiedComics.findIndex(
      (item) => item.id === comicStore.numberRandom
    ) === -1
  ) {
    rateComics({ id: comicStore.numberRandom, rating: comicStore.rating });
  }
  toastSuccessMessage("Rating send");
  comicStore.changeConfetti();
};

export const validateRating = () => {
  const comicStore = useComicStore();
  const comicRating = comicStore.qualifiedComics.find(
    (item) => item.id === comicStore.numberRandom
  );
  if (comicRating) {
    comicStore.rating = comicRating.rating;
  }
};
