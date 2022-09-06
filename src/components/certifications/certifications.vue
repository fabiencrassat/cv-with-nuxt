<!-- eslint-disable vue/html-indent -->
<template>
  <div
    v-if="
      certifications &&
      Object.keys(certifications).length !== 0 &&
      certifications.constructor === Object
    "
    class="flex flex-wrap -mb-5"
  >
    <div
      v-for="(value, key) in certifications"
      :key="key"
      class="relative rounded-lg shadow-lg text-center bg-white mb-5 mx-auto p-5 w-64"
    >
      <!-- eslint-disable-next-line vue/html-self-closing -->
      <img
        :src="value.image"
        :alt="value.label"
        height="200"
        width="200"
        class="m-auto"
      />
      <p class="font-black mt-5 mb-3">
        {{ value.label }}
      </p>
      <p>
        {{ value.date }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    certifications: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  // INFO: Remove data() when coverage is successful with vue-jest@4.x.x
  data() {
    return {};
  },
};
</script>
