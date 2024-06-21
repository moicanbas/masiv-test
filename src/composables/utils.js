import { toast } from "vue3-toastify";
import { useComicStore } from "@/stores/store";

const showToastMessage = (type, message) => {
  toast[type](message, {
    position: toast.POSITION.BOTTOM_RIGHT,
    theme: "colored",
    autoClose: 3500,
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
  };
};

export const rateComics = (comic) => {
  const comicStore= getComicStore();
  comicStore.qualifiedComics.push({ id: comic.id, rating: comic.rating });
  storeQualifiedComics(comicStore.qualifiedComics);
};

export const ratingComic = () => {
  const comicStore = getComicStore();
  if (comicStore.qualifiedComics.findIndex((item) => item.id === comicStore.numberRandom) === -1) {
    rateComics({ id: comicStore.numberRandom, rating: comicStore.rating });
  }
  comicStore.changeConfetti()
  toastSuccessMessage('Rating send')
};

export const validateRating = () => {
  const { qualifiedComics, numberRandom } = getComicStore();
  const comicRating = qualifiedComics.find((item) => item.id === numberRandom);
  if (comicRating) {
    const comicStore = useComicStore();
    comicStore.changeConfetti()
    comicStore.rating = comicRating.rating;
  }
};
