import { mount } from "@vue/test-utils";
import ComicRating from "@/components/ComicRating.vue";
import { useComicStore } from "@/stores/store";
import { rateCurrentComic } from "@/composables/utils";

// Mock the store and utils
jest.mock("@/stores/store");
jest.mock("@/composables/utils");

describe("ComicRating.vue", () => {
  let comicStore;

  beforeEach(() => {
    comicStore = {
      comic: { id: 1, title: "Example Comic" },
      rating: 3,
    };
    useComicStore.mockReturnValue(comicStore);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the rating component when comic is present", () => {
    const wrapper = mount(ComicRating);
    const rating = wrapper.findComponent({ name: "Rating" });

    expect(rating.exists()).toBe(true);
    expect(wrapper.html()).toContain("Rating 3/5");
  });

  it("does not render the rating component when comic is null", () => {
    comicStore.comic = null;
    const wrapper = mount(ComicRating);

    expect(wrapper.findComponent({ name: "Rating" }).exists()).toBe(false);
  });

  it("calls rateCurrentComic when the rating is changed", async () => {
    const wrapper = mount(ComicRating);
    const rating = wrapper.findComponent({ name: "Rating" });

    await rating.trigger("change");
    expect(rateCurrentComic).toHaveBeenCalled();
  });
});
