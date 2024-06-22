import { describe, it, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import axios from "axios";
import { searchNewComic } from "@/services/callToApi";
import { validateComicRating, showErrorToast } from "@/composables/utils";
import { useComicStore } from "@/stores/store";

describe("searchNewComic", () => {
  let comicStore;

  beforeEach(() => {
    setActivePinia(createPinia());
    comicStore = useComicStore();
    vitest.mockModule(axios, {
      get: jest.fn()
    });
  });

  it("should set comicStore properties correctly on successful API call", async () => {
    const mockComicData = {
      /* Datos simulados de respuesta */
    };
    axios.get.mockResolvedValue({ data: mockComicData });

    await searchNewComic();

    expect(comicStore.comic).toEqual(mockComicData);
    expect(comicStore.generate).toBe(false);
    expect(comicStore.viewNotFound).toBe(false);
    expect(comicStore.numberRandom).toBeDefined();
    expect(axios.get).toHaveBeenCalledWith(
      `${comicStore.urlSearch}/${comicStore.numberRandom}/info.0.json`
    );
    expect(validateComicRating).toHaveBeenCalled();
    expect(showErrorToast).not.toHaveBeenCalled();
  });

  it("should handle error and show error toast on API failure", async () => {
    const errorMessage = "Error message";
    axios.get.mockRejectedValue(new Error(errorMessage));

    await searchNewComic();

    expect(comicStore.comic).toBeNull();
    expect(comicStore.generate).toBe(false);
    expect(comicStore.viewNotFound).toBe(true);
    expect(showErrorToast).toHaveBeenCalledWith(
      "An error occurred while processing the request."
    );
  });
});
