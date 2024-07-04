import { describe, it, expect, vi, beforeEach } from "vitest";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { searchNewComic } from "@/services/callToApi";
import { setActivePinia, createPinia } from "pinia";
import { useComicStore } from "@/stores/store";
import { showErrorToast } from "@/composables/utils";

const mock = new MockAdapter(axios);

vi.mock("@/composables/utils", () => ({
  generateRandomNumber: vi.fn(() => 123),
  validateComicRating: vi.fn(),
  showErrorToast: vi.fn(),
}));

describe("searchNewComic", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    const comicStore = useComicStore();
    comicStore.$reset();
  });

  it("handles error while fetching comic data", async () => {
    mock.onGet("http://xkcd.com/123/info.0.json").reply(500);

    const comicStore = useComicStore();
    await searchNewComic();

    expect(comicStore.comic).toBe(null);
    expect(comicStore.generate).toBe(false);
    expect(comicStore.viewNotFound).toBe(true);
    expect(showErrorToast).toHaveBeenCalledWith(
      "An error occurred while processing the request."
    );
  });
});
