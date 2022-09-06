<template>
  <h1
    class="text-4xl sm:text-5xl uppercase mb-4"
    :class="{ 'mt-8': first, 'mt-12': !first }"
  >
    <slot />
  </h1>
</template>

<script>
export default {
  props: {
    first: {
      type: Boolean,
      default: false,
    },
  },
  // INFO: Remove data() when coverage is successful with vue-jest@4.x.x
  data() {
    return {};
  },
};
</script>
