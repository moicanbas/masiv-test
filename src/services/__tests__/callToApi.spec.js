import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { setActivePinia, createPinia } from 'pinia';
import { searchNewComic } from '../callToApi';
import { useComicStore } from '@/stores/store';
import { generateRandomNumber, validateComicRating, showErrorToast } from '@/composables/utils';

jest.mock('@/composables/utils', () => ({
  generateRandomNumber: jest.fn(),
  validateComicRating: jest.fn(),
  showErrorToast: jest.fn()
}));

describe('callToApi.js', () => {
  let mock;

  beforeEach(() => {
    setActivePinia(createPinia());
    mock = new MockAdapter(axios);
    jest.clearAllMocks();  // Clear mock calls
  });

  afterEach(() => {
    mock.restore();
  });

  it('fetches and updates the comic store correctly', async () => {
    const comicStore = useComicStore();
    const mockData = { title: 'Mock Comic' };
    const randomNum = 1;

    generateRandomNumber.mockReturnValue(randomNum);
    mock.onGet(`${comicStore.urlSearch}/${randomNum}/info.0.json`).reply(200, mockData);

    await searchNewComic();

    expect(generateRandomNumber).toHaveBeenCalled();
    expect(validateComicRating).toHaveBeenCalled();
    expect(comicStore.comic).toEqual(mockData);
    expect(comicStore.viewNotFound).toBe(false);
    expect(comicStore.generate).toBe(false);
  });

  it('handles API errors correctly', async () => {
    const comicStore = useComicStore();
    const randomNum = 1;

    generateRandomNumber.mockReturnValue(randomNum);
    mock.onGet(`${comicStore.urlSearch}/${randomNum}/info.0.json`).reply(500);

    await searchNewComic();

    expect(generateRandomNumber).toHaveBeenCalled();
    expect(validateComicRating).toHaveBeenCalled();
    expect(comicStore.comic).toBeNull();
    expect(comicStore.viewNotFound).toBe(true);
    expect(comicStore.generate).toBe(false);
    expect(showErrorToast).toHaveBeenCalledWith("An error occurred while processing the request.");
  });
});
