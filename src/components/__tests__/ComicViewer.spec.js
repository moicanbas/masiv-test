import { mount } from "@vue/test-utils";
import ComicViewer from "@/components/ComicViewer.vue";
import ComicContent from "@/components/ComicContent.vue";
import ComicRating from "@/components/ComicRating.vue";
import ButtonsArea from "@/components/ButtonsArea.vue";
import ConfettiExplosion from "vue-confetti-explosion";
import { useComicStore } from "@/stores/store";

// Mock the store and components
jest.mock("@/stores/store");
jest.mock("@/components/ComicContent.vue");
jest.mock("@/components/ComicRating.vue");
jest.mock("@/components/ButtonsArea.vue");
jest.mock("vue-confetti-explosion");

describe("ComicViewer.vue", () => {
  let comicStore;

  beforeEach(() => {
    comicStore = {
      viewConfetti: false,
    };
    useComicStore.mockReturnValue(comicStore);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders child components", () => {
    const wrapper = mount(ComicViewer);

    expect(wrapper.findComponent(ComicContent).exists()).toBe(true);
    expect(wrapper.findComponent(ComicRating).exists()).toBe(true);
    expect(wrapper.findComponent(ButtonsArea).exists()).toBe(true);
  });

  it("renders ConfettiExplosion when viewConfetti is true", async () => {
    comicStore.viewConfetti = true;
    const wrapper = mount(ComicViewer);

    expect(wrapper.findComponent(ConfettiExplosion).exists()).toBe(true);
  });

  it("does not render ConfettiExplosion when viewConfetti is false", () => {
    comicStore.viewConfetti = false;
    const wrapper = mount(ComicViewer);

    expect(wrapper.findComponent(ConfettiExplosion).exists()).toBe(false);
  });
});
