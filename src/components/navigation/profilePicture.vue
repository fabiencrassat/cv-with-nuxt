<template>
  <img
    class="rounded-full border-4 border-solid border-blue-300 shadow-outline lazyLoad isLoaded"
    height="100"
    width="100"
    :src="picture"
    :alt="name"
  >
</template>

<script>
export default {
  props: {
    name: {
      required: true,
      type: String,
    },
    picture: {
      required: true,
      type: String,
    },
  },
};
</script>
