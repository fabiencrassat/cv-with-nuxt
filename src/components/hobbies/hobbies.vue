<!-- eslint-disable vue/html-indent -->
<template>
  <div
    v-if="
      hobbies &&
      Object.keys(hobbies).length !== 0 &&
      hobbies.constructor === Object
    "
    class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto px-8"
  >
    <div
      v-for="(item, index) in hobbies"
      :id="item.id"
      :key="index"
      class="flex flex-col justify-between w-full bg-white rounded h-full text-grey-darkest no-underline shadow-md"
    >
      <div class="text-2xl sm:text-3xl p-6">
        {{ item.label }}
      </div>
      <!-- eslint-disable-next-line vue/html-self-closing -->
      <img
        class="w-full block rounded-b"
        height="333"
        width="500"
        :src="item.image"
        :alt="item.label"
      />
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
