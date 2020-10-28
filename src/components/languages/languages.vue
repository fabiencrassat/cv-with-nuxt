<template>
  <div>
    <dl>
      <div
        v-for="(item, index) in languages"
        :id="item.id"
        :key="index"
        class="bg-white odd:bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
      >
        <dt class="text-sm leading-5 font-medium text-gray-700">
          {{ item.label }}
        </dt>
        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
          {{ item.description }}
        </dd>
      </div>
    </dl>
  </div>
</template>

<script>
export default {
  props: {
    languages: {
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
