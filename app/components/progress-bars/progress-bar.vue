<template>
  <div>
    <div class="flex items-end justify-between">
      <span>{{ label }}</span>
      <span>{{ percentage }}%</span>
    </div>
    <div class="h-4 relative rounded-md overflow-hidden bg-gray-200">
      <div
        class="h-full rounded-sm bg-blue-500 relative w-0"
        :style="{ width: percentage + '%' }"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      default: '',
      type: String,
    },
    percentage: {
      default: 100,
      type: Number,
    },
  },
};
</script>
