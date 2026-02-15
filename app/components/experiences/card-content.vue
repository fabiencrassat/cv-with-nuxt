<template>
  <ul
    v-if="items && items.length > 0"
    class="text-gray-700 text-base"
  >
    <li
      v-for="(item, i) in items"
      :key="i"
    >
      {{ item }}
    </li>
  </ul>
  <ul v-else />
</template>

<script>
export default {
  props: {
    items: {
      default: () => [],
      type: Array,
    },
  },
};
</script>
