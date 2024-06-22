import { setActivePinia, createPinia } from 'pinia';
import { useComicStore } from '@/stores/store';
import {
  showSuccessToast,
  showErrorToast,
  generateRandomNumber,
  rateComic,
  rateCurrentComic,
  validateComicRating
} from '../utils';
import { toast } from "vue3-toastify";

// Mocking the toast functions
jest.mock("vue3-toastify", () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

describe('utils.js', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    localStorage.clear();
    jest.clearAllMocks();
  });

  it('shows success toast message', () => {
    showSuccessToast('Success message');
    expect(toast.success).toHaveBeenCalledWith('Success message', expect.any(Object));
  });

  it('shows error toast message', () => {
    showErrorToast('Error message');
    expect(toast.error).toHaveBeenCalledWith('Error message', expect.any(Object));
  });

  it('generates a random number between 1 and 25', () => {
    const randomNumber = generateRandomNumber();
    expect(randomNumber).toBeGreaterThanOrEqual(1);
    expect(randomNumber).toBeLessThanOrEqual(25);
  });

  it('rates a comic and saves it to localStorage', () => {
    const comicStore = useComicStore();
    rateComic({ id: 1, rating: 5 });

    const savedComics = JSON.parse(localStorage.getItem('qualifiedComics'));
    expect(savedComics).toEqual([{ id: 1, rating: 5 }]);
    expect(comicStore.qualifiedComics).toEqual([{ id: 1, rating: 5 }]);
  });

  it('rates the current comic if it has not been rated yet', () => {
    const comicStore = useComicStore();
    comicStore.numberRandom = 1;
    comicStore.rating = 5;

    rateCurrentComic();

    const savedComics = JSON.parse(localStorage.getItem('qualifiedComics'));
    expect(savedComics).toEqual([{ id: 1, rating: 5 }]);
    expect(toast.success).toHaveBeenCalledWith('Rating sent', expect.any(Object));
  });

  it('does not rate the current comic if it has been rated already', () => {
    const comicStore = useComicStore();
    comicStore.numberRandom = 1;
    comicStore.rating = 5;
    comicStore.qualifiedComics.push({ id: 1, rating: 4 });

    rateCurrentComic();

    const savedComics = JSON.parse(localStorage.getItem('qualifiedComics'));
    expect(savedComics).toEqual([{ id: 1, rating: 4 }]);
    expect(toast.success).toHaveBeenCalledWith('Rating sent', expect.any(Object));
  });

  it('validates comic rating and updates store rating', () => {
    const comicStore = useComicStore();
    comicStore.numberRandom = 1;
    comicStore.qualifiedComics.push({ id: 1, rating: 4 });

    validateComicRating();

    expect(comicStore.rating).toBe(4);
  });

  it('does not update store rating if comic is not rated', () => {
    const comicStore = useComicStore();
    comicStore.numberRandom = 1;

    validateComicRating();

    expect(comicStore.rating).toBeNull();
  });
});
