<template>
  <h2>
    {{ name }}
  </h2>
</template>

<script>
export default {
  name: 'NavigationName',
  props: {
    name: {
      required: true,
      type: String,
    },
  },
};
</script>
