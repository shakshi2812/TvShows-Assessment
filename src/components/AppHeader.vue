<template>
  <div>
    <b-container fluid class="header">
      <b-navbar toggleable="sm">
        <b-navbar-brand class="text-white font-weight-bold">
          <b-icon icon="play-circle-fill"></b-icon>
          TvShow
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item align="right"
              ><router-link class="nav-link text-white font-weight-bold" to="/"
                >Home</router-link
              ></b-nav-item
            >
            <b-nav-item align="right"
              ><router-link
                class="nav-link text-white font-weight-bold"
                to="/search"
                >Search</router-link
              ></b-nav-item
            >
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style scoped>
.header {
  background: #3c8cf0;
}
</style>
