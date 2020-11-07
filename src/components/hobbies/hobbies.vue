<template>
  <div
    class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto p-8"
  >
    <div
      v-for="(item, index) in hobbies"
      :id="item.id"
      :key="index"
      class="w-full bg-white rounded h-full text-grey-darkest no-underline shadow-md"
    >
      <h1 class="text-3xl p-6 whitespace-no-wrap">
        {{ item.label }}
      </h1>
      <!-- eslint-disable-next-line vue/html-self-closing -->
      <img class="w-full block rounded-b" :src="item.image" :alt="item.label" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hobbies: {
      // Example: {}
      type: Object,
      default: () => {},
    },
  },
  // TODO: Remove data() when coverage is successful with vue-jest@4.x.x
  data() {
    return {};
  },
};
</script>
