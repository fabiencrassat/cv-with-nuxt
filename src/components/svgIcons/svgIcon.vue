<template>
  <svg
    version="1.1"
    :id="'svg-' + id"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 20 20"
    enable-background="new 0 0 20 20"
    xml:space="preserve"
    class="h-5 w-5 inline mr-3 fill-current"
  >
    <slot />
  </svg>
</template>

<style scoped>
svg {
  @media (min-width: 640px) and (max-width: 767px) {
    @apply w-8 h-8 mx-3;
  }
}
</style>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  // TODO: Remove data() when coverage is successful with vue-jest@4.x.x
  data() {
    return {};
  },
};
</script>
