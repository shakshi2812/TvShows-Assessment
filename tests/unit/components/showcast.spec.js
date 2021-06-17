import { shallowMount, createLocalVue } from "@vue/test-utils";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import ShowCast from "@/components/ShowCast.vue";
import { castDetails } from "../testmockdata";

describe("ShowCast.vue", () => {
  let castWrapper;
  const cast = castDetails;
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);

    castWrapper = shallowMount(ShowCast, {
      localVue,
      propsData: {
        cast,
      },
      stubs: ["router-link"],
    });
  });

  afterEach(() => {
    castWrapper.destroy();
  });
  it("display cast person name", () => {
    expect(castWrapper.find(".cast-person-name").exists()).toBe(true);
    expect(castWrapper.find(".cast-person-name").text()).toBe(cast.person.name);
  });
  it("display cast character name as", () => {
    expect(castWrapper.find(".cast-character-name").exists()).toBe(true);
    expect(castWrapper.find(".cast-character-name").text()).toBe(
      cast.character.name
    );
  });
});
