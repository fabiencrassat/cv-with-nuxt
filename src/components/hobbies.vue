<template>
  <div
    class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto px-8"
  >
    <div
      v-for="(value, key) in hobbies"
      :key="key"
      class="flex flex-col justify-between w-full bg-white rounded h-full text-grey-darkest no-underline shadow-md"
    >
      <div class="text-2xl sm:text-3xl p-6">
        {{ value.label }}
      </div>
      <img
        class="w-full block rounded-b"
        height="333"
        width="500"
        :src="value.image"
        :alt="value.label"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'HobbiesItem',
  props: {
    hobbies: {
      required: true,
      type: Object,
    },
  },
};
</script>
