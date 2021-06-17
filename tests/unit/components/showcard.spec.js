import { shallowMount, createLocalVue } from "@vue/test-utils";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import ShowCard from "@/components/ShowCard.vue";
import { showDetails } from "../testmockdata";

describe("ShowCard.vue", () => {
  let showcardWrapper;
  const showlist = showDetails;
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);

    showcardWrapper = shallowMount(ShowCard, {
      localVue,
      propsData: {
        showlist,
      },
      stubs: ["router-link"],
    });
  });

  afterEach(() => {
    showcardWrapper.destroy();
  });
  it("display show name", () => {
    expect(showcardWrapper.find(".show-name").exists()).toBe(true);
    expect(showcardWrapper.find(".show-name").text()).toContain(showlist.name);
  });
  it("display show average", () => {
    expect(showcardWrapper.find(".show-average").exists()).toBe(true);
    expect(showcardWrapper.find(".show-average").text()).toContain(
      showlist.rating.average
    );
  });
  it("display show premiered", () => {
    expect(showcardWrapper.find(".show-premiered").exists()).toBe(true);
    expect(showcardWrapper.find(".show-premiered").text()).toContain(
      showlist.premiered
    );
  });
  it("display show genres", () => {
    expect(showcardWrapper.find(".show-genres").exists()).toBe(true);
    expect(showcardWrapper.find(".show-genres").text()).toContain(
      showlist.genres.join(", ")
    );
  });
});
