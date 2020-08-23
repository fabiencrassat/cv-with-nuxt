<template>
  <div class="flex items-center">
    <!-- eslint-disable-next-line vue/html-self-closing -->
    <img
      class="w-10 h-10 rounded-full mr-4"
      :src="society.icon ? society.icon : '/img/societies/office-building.svg'"
      :alt="society.name"
    />
    <div class="text-sm">
      <p class="leading-none">
        {{ society.name }}
      </p>
      <p class="text-gray-700">
        {{ society.address }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    society: {
      type: Object,
      required: true,
    },
  },
};
</script>
