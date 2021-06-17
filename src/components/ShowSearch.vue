<template>
  <div>
    <template>
      <div class="search">
        <b-form>
          <b-row>
            <b-col>
              <b-form-input
                size="lg"
                v-model="searchedshow"
                placeholder="Search Shows"
              ></b-form-input>
            </b-col>
            <b-button size="lg" class="btn-search" @click="searchShow()"
              ><b-icon icon="search" class="text-white search-icon"></b-icon
              >search</b-button
            >
          </b-row>
        </b-form>
      </div>
    </template>
    <template v-if="tvShowSearchedList.length > 0 && isSearched === true">
      <div class="btnback">
        <b-button variant="primary" @click="$router.go(-1)">
          <b-icon icon="arrow-left"></b-icon>
        </b-button>
      </div>
      <br />
      <div>
        <b-row>
          <b-col
            lg="3"
            md="4"
            sm="6"
            v-for="show in tvShowSearchedList"
            :key="show.id"
          >
            <ShowCard :showlist="show"> </ShowCard>
          </b-col>
        </b-row>
      </div>
    </template>
    <template
      v-else-if="tvShowSearchedList.length === 0 && isSearched === true"
    >
      <strong class="notfound">Show Not Found!!!!!!!!!!</strong>
    </template>
  </div>
</template>
<script>
import { getSearchShow } from "../services/tvshow.service.js";
import ShowCard from "../components/ShowCard.vue";

export default {
  name: "ShowSearch",
  components: { ShowCard },
  data() {
    return {
      isSearched: false,
      searchedshow: "",
      tvShowSearchedList: [],
    };
  },
  methods: {
    async searchShow() {
      const response = await getSearchShow(this.searchedshow);
      this.tvShowSearchedList = response.data.map(
        (tvShowSearchedList) => tvShowSearchedList.show
      );
      this.searchedshow = "";
      this.isSearched = true;
    },
  },
};
</script>
<style scoped>
.btnback {
  float: left;
}
.search {
  width: 50%;
  padding-top: 20px;
  margin: auto;
}
.btn-search {
  background: #3c8cf0;
}
.notfound {
  text-align: center;
  padding: 20px;
  color: #3c8cf0;
  min-height: 600px;
}
</style>
