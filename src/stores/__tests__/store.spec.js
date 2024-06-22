import { setActivePinia, createPinia } from 'pinia';
import { useComicStore } from '../store';

describe('Comic Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    localStorage.clear();
  });

  it('initializes with the correct state', () => {
    const comicStore = useComicStore();

    expect(comicStore.urlSearch).toBe('https://xkcd.com');
    expect(comicStore.comic).toBeNull();
    expect(comicStore.numberRandom).toBe(0);
    expect(comicStore.generate).toBe(false);
    expect(comicStore.rating).toBeNull();
    expect(comicStore.viewNotFound).toBe(false);
    expect(comicStore.viewConfetti).toBe(false);
    expect(comicStore.qualifiedComics).toEqual([]);
  });

  it('loads qualified comics from localStorage if present', () => {
    const qualifiedComics = [{ id: 1, rating: 4 }];
    localStorage.setItem('qualifiedComics', JSON.stringify(qualifiedComics));

    const comicStore = useComicStore();

    expect(comicStore.qualifiedComics).toEqual(qualifiedComics);
  });

  it('handles missing qualified comics in localStorage', () => {
    const comicStore = useComicStore();

    expect(comicStore.qualifiedComics).toEqual([]);
  });
});
