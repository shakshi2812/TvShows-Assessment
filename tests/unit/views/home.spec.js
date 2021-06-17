import { shallowMount, createLocalVue } from "@vue/test-utils";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import home from "@/views/Home.vue";
import {
  homeShows,
  showGenres,
  sortedHomeShows,
  homeShowsInRandom,
} from "../testmockdata";

describe("Home.vue", () => {
  let homeWrapper;
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);
    homeWrapper = shallowMount(home, {
      localVue,
    });
  });
  afterEach(() => {
    homeWrapper.destroy();
  });
  it("is a Vue instance", () => {
    expect(homeWrapper.isVueInstance).toBeTruthy();
  });

  it("should test sortTvShow function", () => {
    let data = homeShows;
    let sorted = homeWrapper.vm.sortTvShow(data);
    expect(sorted).toStrictEqual(sortedHomeShows);

    let dataInRandom = homeShowsInRandom;
    sorted = homeWrapper.vm.sortTvShow(dataInRandom);
    expect(sorted).toStrictEqual(sortedHomeShows);
  });

  it("initialize function should be called on create", () => {
    const spyinit = jest.spyOn(homeWrapper.vm, "getAllTvShows");
    setTimeout(() => {
      expect(spyinit).toHaveBeenCalled();
      expect(homeWrapper.vm.getAllTvShows).toHaveBeenCalled();
    });
  });

  it("compute genre name", () => {
    homeWrapper.setData({
      tvShowsList: homeShows,
    });
    expect(homeWrapper.vm.genresName).toStrictEqual(showGenres);
  });
});
