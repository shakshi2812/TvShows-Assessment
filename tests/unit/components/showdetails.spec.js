import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import ShowDetails from "@/components/ShowDetails.vue";
import { routes } from "@/router/index";

jest.mock("axios", () => ({
  get: () =>
    Promise.resolve({
      data: {
        id: 134,
        name: "Cops",
        genres: ["Action", "Crime"],
        rating: {
          average: 7.8,
        },
      },
    }),
}));

describe("In ShowDetail Component", () => {
  let wrapper;
  const router = new VueRouter({ routes });

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);

    wrapper = shallowMount(ShowDetails, {
      localVue,
      router,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  it("created assigns shows", () => {
    expect(wrapper.vm.showInfo).not.toBe(undefined);
    expect(wrapper.vm.showCast).not.toBe(undefined);
  });
  it("getting show detail data", () => {
    expect(wrapper.vm.showInfo.id).toBe(134);
  });
});
