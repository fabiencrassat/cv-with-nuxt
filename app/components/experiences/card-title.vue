<template>
  <div class="font-bold text-xl mb-2">
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
    },
  },
};
</script>
