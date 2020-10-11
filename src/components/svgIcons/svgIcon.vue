<template>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 20 20"
    enable-background="new 0 0 20 20"
    xml:space="preserve"
    class="inline fill-current"
  >
    <slot />
  </svg>
</template>

<script>
export default {
  // TODO: Remove data() when coverage is successful with vue-jest@4.x.x
  data() {
    return {};
  },
};
</script>
