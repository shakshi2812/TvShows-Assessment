<template>
  <b-container class="home">
    <template v-if="tvShowsDashboardList.length > 0">
      <h3><strong>Trending Shows</strong></h3>
      <div>
        <b-row class="row">
          <b-col v-for="(popular, index) in tvShowsDashboardList" :key="index">
            <ShowCard :showlist="popular"> </ShowCard>
          </b-col>
        </b-row>
      </div>
    </template>
    <template v-else>
      <div class="d-flex justify-content-center mb-3 spin">
        <b-spinner class="spinner" variant="primary"></b-spinner>
      </div>
    </template>
    <template v-if="genresData.length > 0">
      <div v-for="(genre, index) in genresData" :key="index">
        <h3 class="mt-4">
          {{ genre.name }}
        </h3>
        <div>
          <b-row>
            <b-col v-for="(show, index) in genre.shows" :key="index">
              <ShowCard :showlist="show"> </ShowCard>
            </b-col>
          </b-row>
        </div>
      </div>
    </template>
  </b-container>
</template>

<script>
import ShowCard from "../components/ShowCard.vue";
import { getAllShow } from "../services/tvshow.service.js";
export default {
  name: "Home",
  data() {
    return {
      tvShowsList: [],
      tvShowsDashboardList: [],
    };
  },
  components: {
    ShowCard,
  },
  computed: {
    genresName() {
      const genre = Array.from(
        new Set(this.tvShowsList.flatMap((show) => show.genres))
      );
      return genre.sort();
    },
    genresData() {
      return this.genresName.map((genre) => {
        return {
          name: genre,
          shows: this.tvShowsList.filter((show) => show.genres.includes(genre)),
        };
      });
    },
  },
  methods: {
    //getting all show and sorting list for trending show
    async getAllTvShows() {
      const response = await getAllShow();
      this.tvShowsList = response.data;
      this.tvShowsDashboardList = this.sortTvShow(this.tvShowsList);
    },
    sortTvShow(shows) {
      return shows
        .filter((show) => show.rating.average)
        .sort((tvShows1, tvShows2) =>
          tvShows1.rating.average < tvShows2.rating.average ? 1 : -1
        );
    },
  },
  created() {
    this.getAllTvShows();
  },
};
</script>
<style scoped>
h3 {
  color: #3c8cf0;
  padding-top: 10px;
  text-align: left;
  margin-top: 20px;
}
.spinner {
  width: 70px;
  height: 70px;
  margin-top: 130px;
}
.spin {
  min-height: 700px;
}
.row {
  flex-direction: row;
  flex-wrap: nowrap;
  display: flex;
  overflow: auto;
}
</style>
