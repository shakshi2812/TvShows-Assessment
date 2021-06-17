import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import app from "@/App.vue";
import appFooter from "@/components/AppFooter.vue";
import appHeader from "@/components/AppHeader.vue";

describe("app.vue", () => {
  let appWrapper;
  const router = new VueRouter({ path: "/", name: "Home" });

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);

    appWrapper = shallowMount(app, {
      localVue,
      router,
    });
  });
  afterEach(() => {
    appWrapper.destroy();
  });
  it("is a Vue instance", () => {
    expect(appWrapper.isVueInstance).toBeTruthy();
  });
  it("renders the correct tag", () => {
    expect(appWrapper.html()).toContain('<div id="app">');
  });

  it("should have a div element with id=app", () => {
    expect(appWrapper.attributes("id")).toBe("app");
  });

  //for AppHeader
  it("it should load the header", () => {
    expect(appHeader).toBeTruthy();
  });
  it("it should have a <appheader-stub></appheader-stub>", () => {
    expect(appWrapper.html()).toContain("<appheader-stub></appheader-stub>");
  });

  //for router tag tesing
  it("it should have a <router-view-stub></router-view-stub>", () => {
    expect(appWrapper.html()).toContain(
      '<router-view-stub name="default"></router-view-stub>'
    );
  });

  //for AppFooter
  it("it should load the footer", () => {
    expect(appFooter).toBeTruthy();
  });
  it("it should have a <appfooter-stub></appfooter-stub>", () => {
    expect(appWrapper.html()).toContain("<appfooter-stub></appfooter-stub>");
  });
});
