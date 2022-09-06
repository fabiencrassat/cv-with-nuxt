<template>
  <!-- eslint-disable-next-line vue/html-self-closing -->
  <img
    class="rounded-full border-4 border-solid border-blue-300 shadow-outline lazyLoad isLoaded"
    height="100"
    width="100"
    :src="picture"
    :alt="name"
  />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
  },
  // INFO: Remove data() when coverage is successful with vue-jest@4.x.x
  data() {
    return {};
  },
};
</script>
