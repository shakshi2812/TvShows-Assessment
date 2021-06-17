<template>
  <div>
    <b-row>
      <div class="ml-3 btnback">
        <b-button variant="primary" @click="$router.go(-1)">
          <b-icon icon="arrow-left"></b-icon>
        </b-button>
      </div>
    </b-row>
    <template v-if="showInfo">
      <b-container fluid>
        <b-row>
          <b-col lg="4" md="6" sm="6">
            <b-img
              class="card-border"
              left
              fluid
              width="350%"
              :src="showInfo.image.medium || showInfo.image.original"
              v-if="showInfo.image"
              rounded
            ></b-img>
            <div v-else class="card text-center">
              <h3>Image Not Available</h3>
            </div>
          </b-col>
          <b-col lg="8" md="6" sm="6">
            <h2 class="show-name text-heading mt-2">
              <strong>{{ showInfo.name }}</strong>
            </h2>
            <div>
              <span>
                <b-icon icon="star-fill" class="star-icon"></b-icon>
              </span>
              <span class="ml-1 text-black" v-if="showInfo.rating">
                {{ showInfo.rating.average }}
              </span>
              <span v-else class="ml-1 text-black">NA</span>
              <span class="mx-2 text-black">|</span>
              <span>
                <b-icon icon="calendar3" class="text-black"></b-icon>
              </span>
              <span
                class="show-premiered ml-1 text-black"
                v-if="showInfo.premiered"
              >
                {{ showInfo.premiered }}
              </span>
              <span v-else class="ml-1 text-black">NA</span>
              <span class="mx-2 text-black">|</span>
              <span>
                <b-icon icon="film" class="text-black"></b-icon>
              </span>
              <span
                class="show-genres ml-1 text-black"
                v-if="this.genre.length > 0"
              >
                {{ showInfo.genres.join() }}
              </span>
              <span v-else class="ml-1 text-white">NA</span>
            </div>
            <div class="mt-5 summary">
              <h2 class="show-name">
                <small>Summary</small>
              </h2>
              <p
                v-if="showInfo.summary"
                class="text-color"
                v-html="showInfo.summary"
              ></p>
              <p class="text-wite" v-else>Not Available</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </template>
    <div class="cast">
      <h2 class="heading">
        <strong> Cast</strong>
      </h2>
      <template v-if="showCast.length > 0">
        <b-row>
          <b-col
            lg="3"
            md="4"
            sm="6"
            v-for="(cast, index) in showCast"
            :key="index"
          >
            <ShowCast :cast="cast"> </ShowCast>
          </b-col>
        </b-row>
      </template>
      <template v-else>
        <div class="details">
          <h2><em>No casts are available </em></h2>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import { getShowInfo, getShowCast } from "../services/tvshow.service.js";
import ShowCast from "../components/ShowCast.vue";

export default {
  name: "ShowDetails",
  components: {
    ShowCast,
  },
  data() {
    return {
      showId: this.$route.params.id,
      showInfo: {},
      genre: "",
      showCast: [],
    };
  },
  methods: {
    async getTvShowInfo() {
      try {
        const res = await getShowInfo(this.showId);
        this.showInfo = res.data;
        this.genre = this.showInfo.genres;
      } catch (err) {
        console.log(err);
      }
    },

    async getTvShowCast() {
      try {
        const res = await getShowCast(this.showId);
        this.showCast = res.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
  created() {
    this.getTvShowInfo();
    this.getTvShowCast();
  },
};
</script>
<style scoped>
.btnback {
  float: left;
  padding-top: 20px;
  padding-left: 30px;
}
.summary {
  font-family: Georgia, "Times New Roman", Times, serif;
}
.card-border {
  padding-top: 35px;
  padding-left: 20px;
  padding-bottom: 20px;
  padding-right: 20px;
}
.heading {
  color: #3c8cf0;
  margin-top: 30px;
  text-align: left;
  padding-left: 35px;
}
.star-icon {
  color: #ffd700;
}
.show-name {
  color: #3c8cf0;
}
.cast {
  margin-top: 50px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  border-top: 10px solid #383838;
}
.details {
  color: #3c8cf0;
  min-height: 190px;
  margin-top: 50px;
}
</style>
