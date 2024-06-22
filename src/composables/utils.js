import { toast } from "vue3-toastify";
import { useComicStore } from "@/stores/store";

const displayToastMessage = (type, message) => {
  toast[type](message, {
    position: toast.POSITION.BOTTOM_RIGHT,
    theme: "colored",
    autoClose: 3500,
    limit: 3,
  });
};

export const showSuccessToast = (message) =>
  displayToastMessage("success", message);
export const showErrorToast = (message) =>
  displayToastMessage("error", message);

export const generateRandomNumber = () => Math.floor(Math.random() * 25) + 1;

const saveQualifiedComics = (comics) => {
  localStorage.setItem("qualifiedComics", JSON.stringify(comics));
};

const changeConfetti = () => {
  const comicStore = useComicStore();
  if (comicStore.rating >= 3) {
    setTimeout(() => {
      comicStore.viewConfetti = true;
    }, 200);
    comicStore.viewConfetti = false;
  }
};

const getComicStore = () => {
  const comicStore = useComicStore();
  return {
    qualifiedComics: comicStore.qualifiedComics,
    randomComicNumber: comicStore.numberRandom
  };
};

export const rateComic = (comic) => {
  const { qualifiedComics } = getComicStore();
  qualifiedComics.push({ id: comic.id, rating: comic.rating });
  saveQualifiedComics(qualifiedComics);
};

export const rateCurrentComic = () => {
  const comicStore = useComicStore();
  if (
    comicStore.qualifiedComics.findIndex(
      (item) => item.id === comicStore.numberRandom
    ) === -1
  ) {
    rateComic({
      id: comicStore.numberRandom,
      rating: comicStore.rating,
    });
  }
  showSuccessToast("Rating sent");
  changeConfetti();
};

export const validateComicRating = () => {
  const conmicStore = useComicStore();
  const existingComicRating = conmicStore.qualifiedComics.find(
    (item) => item.id === conmicStore.numberRandom
  );
  if (existingComicRating) {
    conmicStore.rating = existingComicRating.rating;
  }
};
