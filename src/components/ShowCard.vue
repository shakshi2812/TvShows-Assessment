<template>
  <div class="mb-3 mt-4">
    <router-link
      :to="{ name: 'ShowDetails', params: { id: showlist.id } }"
      class="heading"
    >
      <img
        class="card-border"
        :src="showlist.image.medium || showlist.image.original"
        v-if="showlist.image"
      />
      <div v-else class="card">
        <h2 class="text-primary">Image Not Available</h2>
      </div>
      <div class="mt-1 show-name" v-if="showlist.name">
        {{ showlist.name }}
        <div class="mt-1">
          <span>
            <b-icon icon="star-fill" class="star-icon"></b-icon>
          </span>
          <span class="text show-average" v-if="showlist.rating.average">
            {{ showlist.rating.average }}
          </span>
          <span v-else class="text"> NA </span>
          <span class="mx-2 text">|</span>
          <span>
            <b-icon icon="calendar3" class="mx-1 heading"></b-icon>
          </span>
          <span class="show-premiered" v-if="showlist.premiered">
            {{ showlist.premiered }}
          </span>
          <span v-else class="text"> NA </span>
          <div>
            <span class="show-genres" v-if="showlist.genres">
              {{ showlist.genres.join(", ") }}
            </span>
            <span v-else class="text"> NA </span>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: ["showlist"],
};
</script>

<style scoped>
.card {
  width: 209px;
  height: 300px;
}
.heading {
  color: #000000;
}
img:hover {
  opacity: 0.9;
}
.star-icon {
  color: #ffd700;
}
</style>
