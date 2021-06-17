<template>
  <div class="mt-3">
    <img
      class="card-border"
      :src="cast.person.image.medium || cast.person.image.original"
      v-if="cast"
    />
    <div v-else class="card">
      <h3>Image Not Available</h3>
    </div>
    <div class="mt-2">
      <span class="cast-person-name text-black">
        {{ cast.person.name }}
      </span>
      <div class="text-warning">as</div>
      <span class="text-black cast-character-name">
        {{ cast.character.name }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowCasts",
  props: ["cast"],
  data() {
    return {};
  },
};
</script>
