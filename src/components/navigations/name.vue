<template>
  <h2>
    {{ name }}
  </h2>
</template>

<script>
export default {
  props: {
    name: {
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
