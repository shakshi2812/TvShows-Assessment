import { shallowMount, createLocalVue } from "@vue/test-utils";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueRouter from "vue-router";
import appHeader from "@/components/AppHeader.vue";

describe("AppHeader.vue", () => {
  let headerWrapper;
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);
    headerWrapper = shallowMount(appHeader, {
      localVue,
    });
  });
  afterEach(() => {
    headerWrapper.destroy();
  });
  it("is a Vue instance", () => {
    expect(headerWrapper.isVueInstance).toBeTruthy();
  });
  it("it should have a router-link with text search", () => {
    expect(headerWrapper.html()).toContain('to="/search"');
  });
});
