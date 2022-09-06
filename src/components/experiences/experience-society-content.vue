<template>
  <div class="flex items-center">
    <!-- eslint-disable-next-line vue/html-self-closing -->
    <img
      v-if="society.icon"
      class="w-10 h-10 mr-4"
      height="40"
      width="40"
      :src="society.icon"
      :alt="society.name"
      :title="society.name"
    />
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      class="w-10 h-10 mr-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    </svg>
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
  // INFO: Remove data() when coverage is successful with vue-jest@4.x.x
  data() {
    return {};
  },
};
</script>
