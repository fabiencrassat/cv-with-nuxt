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
  name: 'HeadingLevel1',
  props: {
    first: {
      default: false,
      type: Boolean,
    },
  },
};
</script>
