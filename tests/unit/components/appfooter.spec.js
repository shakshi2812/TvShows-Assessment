import { shallowMount, createLocalVue } from "@vue/test-utils";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import appfooter from "@/components/AppFooter.vue";

describe("AppFooter.vue", () => {
  let footerWrapper;
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);
    footerWrapper = shallowMount(appfooter, {
      localVue,
    });
  });

  afterEach(() => {
    footerWrapper.destroy();
  });
  it("is a Vue instance", () => {
    expect(footerWrapper.isVueInstance).toBeTruthy();
  });
});
