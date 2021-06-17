import { shallowMount, createLocalVue } from "@vue/test-utils";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import ShowSearch from "@/components/ShowSearch.vue";
import { searchData } from "../testmockdata";
import VueRouter from "vue-router";

describe("ShowSearch.vue", () => {
  let searchWrapper;
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);
    localVue.use(VueRouter);

    searchWrapper = shallowMount(ShowSearch, {
      localVue,
      data() {
        return {
          searchedshow: "Breaking Bad",
          tvShowSearchedList: searchData,
        };
      },
    });
  });
  afterEach(() => {
    searchWrapper.destroy();
  });
  it("is a Vue instance", () => {
    expect(searchWrapper.isVueInstance).toBeTruthy();
  });
  it("it should have a <b-form-stub>", () => {
    expect(searchWrapper.html()).toContain("b-form-stub");
  });
  it("it should have a <b-row-stub>", () => {
    expect(searchWrapper.html()).toContain("b-row-stub");
  });
  it("it should have a <b-col-stub>", () => {
    expect(searchWrapper.html()).toContain("b-col-stub");
  });
  it("it should have a <b-form-input-stub>", () => {
    expect(searchWrapper.html()).toContain("b-form-input-stub");
  });
  it("has called searchShow function", () => {
    searchWrapper.vm.getSearchShow = jest.fn(() => searchWrapper.vm.searchShow);
    searchWrapper.find(".btn-search").trigger("click");
    expect(searchWrapper.vm.tvShowSearchedList).toBe(searchData);
  });

  it("it should find data", () => {
    expect(searchWrapper.vm.searchedshow).toBe("Breaking Bad");
    expect(searchWrapper.vm.tvShowSearchedList).toBe(searchData);
  });
});
