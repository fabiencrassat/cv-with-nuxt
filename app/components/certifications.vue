<template>
  <div class="flex flex-wrap -mb-5">
    <div
      v-for="(value, key) in certifications"
      :key="key"
      class="relative rounded-lg shadow-lg text-center bg-white mb-5 mx-auto p-5 w-64"
    >
      <img
        :src="value.image"
        :alt="value.label"
        height="200"
        class="m-auto"
      >
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
  name: 'CertificationsItem',
  props: {
    certifications: {
      required: true,
      type: Object,
    },
  },
};
</script>
