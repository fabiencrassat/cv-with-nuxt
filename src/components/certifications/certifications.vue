<template>
  <div class="flex flex-wrap">
    <div
      v-for="(item, index) in certifications"
      :id="item.id"
      :key="index"
      class="relative rounded-lg shadow-lg text-center bg-white m-5 p-5 w-64"
    >
      <!-- eslint-disable-next-line vue/html-self-closing -->
      <img :src="item.image" height="200" class="h-48 m-auto" />
      <p class="font-black mt-5 mb-3">
        {{ item.label }}
      </p>
      <p>
        {{ item.date }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    certifications: {
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
