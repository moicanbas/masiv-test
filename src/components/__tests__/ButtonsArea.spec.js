import { mount } from "@vue/test-utils";
import ButtonsArea from "@/components/ButtonsArea.vue";
import { useComicStore } from "@/stores/store";
import { searchNewComic } from "@/services/callToApi";

// Mock the store and the service
jest.mock("@/stores/store");
jest.mock("@/services/callToApi");

describe("ButtonsArea.vue", () => {
  let wrapper;
  let comicStore;

  beforeEach(() => {
    comicStore = {
      generate: false,
    };
    useComicStore.mockReturnValue(comicStore);

    wrapper = mount(ButtonsArea);
  });

  it("renders the button with correct label when not generating", () => {
    const button = wrapper.find("button");
    expect(button.text()).toBe("Generate random comic");
  });

  it("renders the button with correct label when generating", async () => {
    comicStore.generate = true;
    await wrapper.vm.$nextTick(); // Wait for reactivity to update the DOM

    const button = wrapper.find("button");
    expect(button.text()).toBe("Generating");
  });

  it("calls searchNewComic when button is clicked", async () => {
    const button = wrapper.find("button");
    await button.trigger("click");

    expect(searchNewComic).toHaveBeenCalled();
  });
});
