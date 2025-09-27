<template>
  <div>
    <div
      v-for="(value, key) in showingExperiences"
      :key="key"
      class="max-w-sm w-full lg:max-w-full lg:flex mb-4 last:mb-0"
    >
      <CardImage :experience="value" />
      <CardItem :experience="value" />
    </div>
    <div
      v-if="showingElements < experiencesMaxLength"
      class="flex items-center justify-center"
    >
      <button
        class="bg-white text-gray-800 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
        @click="showMore"
      >
        {{ $t('showMore') }}
      </button>
    </div>
  </div>
</template>

<script>
import CardImage from './experiences/card-image';
import CardItem from './experiences/card-item';

export default {
  name: 'ExperiencesItem',
  // eslint-disable-next-line sort-keys
  components: {
    CardImage,
    CardItem,
  },
  props: {
    experiences: {
      required: true,
      type: Object,
    },
  },
  // eslint-disable-next-line sort-keys
  data() {
    const defaultShowingElements = 5;
    return {
      experiencesMaxLength: Object.keys(this.experiences).length,
      showingElements: defaultShowingElements,
      showingExperiences: this.getShowingExperiences(
        this.experiences,
        defaultShowingElements,
      ),
    };
  },
  methods: {
    getShowingExperiences(experiences, itemToShow) {
      const experienceKeys = Object.keys(experiences);
      // eslint-disable-next-line no-magic-numbers
      const visibleKeys = experienceKeys.slice(0, itemToShow);
      const showingExperiences = {};
      for (const key of visibleKeys) {
        showingExperiences[key] = experiences[key];
      }
      return showingExperiences;
    },
    showMore() {
      this.showingElements += this.experiencesMaxLength;
      this.showingExperiences = this.getShowingExperiences(
        this.experiences,
        this.showingElements,
      );
    },
  },
};
</script>
