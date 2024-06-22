import { mount } from "@vue/test-utils";
import ComicContent from "@/components/ComicContent.vue";
import { useComicStore } from "@/stores/store";

// Mock the store
jest.mock("@/stores/store");

describe("ComicContent.vue", () => {
  let comicStore;

  beforeEach(() => {
    comicStore = {
      comic: {
        img: "https://example.com/comic.jpg",
        alt: "Example Comic",
      },
    };
    useComicStore.mockReturnValue(comicStore);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the comic image when comic is present", () => {
    const wrapper = mount(ComicContent);
    const img = wrapper.find("img");

    expect(img.exists()).toBe(true);
    expect(img.attributes("src")).toBe("https://example.com/comic.jpg");
    expect(img.attributes("alt")).toBe("Example Comic");
  });

  it("does not render the comic image when comic is null", () => {
    comicStore.comic = null;
    const wrapper = mount(ComicContent);
    const img = wrapper.find("img");

    expect(img.exists()).toBe(false);
  });
});
