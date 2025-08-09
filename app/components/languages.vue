<template>
  <div>
    <dl>
      <div
        v-for="(value, key) in languages"
        :key="key"
        class="bg-white odd:bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
      >
        <dt class="text-sm leading-5 font-medium text-gray-900">
          {{ value.label }}
        </dt>
        <dd class="mt-1 text-sm leading-5 text-gray-700 sm:mt-0 sm:col-span-2">
          {{ value.description }}
        </dd>
      </div>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'LanguagesItem',
  props: {
    languages: {
      required: true,
      type: Object,
    },
  },
};
</script>
