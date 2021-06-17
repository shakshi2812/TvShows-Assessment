import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ShowDetails from "../components/ShowDetails.vue";
import ShowSearch from "../components/ShowSearch.vue";
import PageNotFound from "../components/PageNotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/info/:id",
    name: "ShowDetails",
    component: ShowDetails,
  },
  {
    path: "/search",
    name: "ShowSearch",
    component: ShowSearch,
  },
  {
    path: "*",
    name: "not-found",
    component: PageNotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
