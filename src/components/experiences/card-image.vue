<template>
  <div
    class="h-48 lg:h-auto lg:w-64 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-center"
    :style="{ 'background-image': 'url(' + experience.jobImage + ')' }"
    :title="experience.job"
  />
</template>

<script>
export default {
  props: {
    experience: {
      required: true,
      type: Object,
    },
  },
};
</script>
