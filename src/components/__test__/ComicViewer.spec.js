import { shallowMount } from "@vue/test-utils";
import ComicViewer from "@/components/ComicViewer.vue";
import { createTestingPinia } from "@pinia/testing";
import { useComicStore } from "@/stores/store";
import { describe, it, vi, expect } from "vitest";
import ComicContent from "@/components/ComicContent.vue";
import ComicRating from "@/components/ComicRating.vue";
import ButtonsArea from "@/components/ButtonsArea.vue";

describe("ComicViewer.vue", () => {
  it("renders ComicContent, ComicRating, ButtonsArea when viewConfetti is false", async () => {
    const pinia = createTestingPinia({
      createSpy: vi.fn,
    });

    const wrapper = shallowMount(ComicViewer, {
      global: {
        plugins: [pinia],
      },
    });

    const comicStore = useComicStore();
    comicStore.viewConfetti = false;

    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent(ComicContent).exists()).toBe(true);
    expect(wrapper.findComponent(ComicRating).exists()).toBe(true);
    expect(wrapper.findComponent(ButtonsArea).exists()).toBe(true);
  });

  it("renders ConfettiExplosion when viewConfetti is true", async () => {
    const pinia = createTestingPinia({
      createSpy: vi.fn,
    });

    const wrapper = shallowMount(ComicViewer, {
      global: {
        plugins: [pinia],
      },
    });

    const comicStore = useComicStore();
    comicStore.viewConfetti = true;

    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent(ComicContent).exists()).toBe(true);
    expect(wrapper.findComponent(ComicRating).exists()).toBe(true);
    expect(wrapper.findComponent(ButtonsArea).exists()).toBe(true);
  });
});
