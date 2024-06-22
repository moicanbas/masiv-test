import { mount } from "@vue/test-utils";
import NotFound from "@/components/NotFound.vue";

describe("NotFound.vue", () => {
  it("renders the correct content", () => {
    const wrapper = mount(NotFound);

    expect(wrapper.find("div.text-3xl.font-bold").text()).toBe(
      "Resource not found"
    );
    expect(wrapper.find("p").text()).toBe(
      "Unfortunately, we have not been able to find the resource you are looking for. It may have been moved, deleted or never existed."
    );
  });

  it("has the correct structure", () => {
    const wrapper = mount(NotFound);

    const article = wrapper.find("article.text-balance");
    expect(article.exists()).toBe(true);

    const div = wrapper.find("div.text-center");
    expect(div.exists()).toBe(true);
  });

  it("has the correct styling classes", () => {
    const wrapper = mount(NotFound);

    expect(wrapper.find("div.text-center").classes()).toContain("text-center");
    expect(wrapper.find("div.text-3xl.font-bold").classes()).toContain(
      "text-3xl"
    );
    expect(wrapper.find("div.text-3xl.font-bold").classes()).toContain(
      "font-bold"
    );
    expect(wrapper.find("p").classes()).toContain("w-[45vw]");
    expect(wrapper.find("p").classes()).toContain("text-md");
    expect(wrapper.find("p").classes()).toContain("opacity-60");
  });
});
